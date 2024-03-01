import { useState } from 'react'
import styles from './Calculator.module.css'
import { validateHeight, validateWeight , validateDigit} from '../validation/Validation';

function Calculator({data , setControl}) {
  const [height , setHeight] = useState('');
  const [weight , setWeight] = useState(''); 
  const [error , setError] = useState(false);
 
  const handleSubmit = (e) =>  {
    if(!validateHeight(height) || !validateWeight(weight)) {
      console.log(weight)
      e.preventDefault();
      setError(true);
      return;
    }

    e.preventDefault();
    data(height , weight)
    clearData();
    setControl(false);
  }

  const handleHeight = (e) => {
    const updateValue = validateDigit(e.target.value)
    setHeight(updateValue);
  }

  const handleWeight = (e) => {
    const updateValue = validateDigit(e.target.value)
    setWeight(updateValue);
  }

  const clearData = () => {
      setHeight("");
      setWeight("");
  }

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Calculadora de IMC</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.inputs}>
                <span>Altura: </span>
                <input
                required
                type='text'
                name='height'
                maxLength={4}
                value={height}
                placeholder='Exemplo: 1.75'
                onChange={handleHeight}
                />
            </label>
            <label className={styles.inputs}>
                <span>Peso: </span>
                <input
                required
                maxLength={6}
                name='weight'
                type='text'
                value={weight}
                placeholder='Exemplo: 70.5'
                onChange={handleWeight}
                />
            </label>
            {error && <p className={styles.error}>Altura ou peso estão invalidos</p>}
            <label className={styles.button}>
                <input type='submit' value='CALCULAR'/>
                <input type='reset' value='LIMPAR' onClick={clearData}/>
            </label>
        </form>
    </div>
  )

} 
export default Calculator