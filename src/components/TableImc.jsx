import styles from './TableImc.module.css'

function TableImc({height , weight , setControl}) {
  
  const weightReplace = weight.replace(',' , '.');
  const heightReplace = height.replace(',' , '.');
  const imc = (weightReplace/heightReplace **2);

  const backToForm = () => {
    setControl(true)
   } 

  const imcRating = [
    {rating : 'Magreza' , min : 0 , max : 18.5 , classColor : 'thiness'} ,
    {rating : 'Normal' ,  min : 18.5 , max : 24.9 , classColor : 'normal' } ,
    {rating : 'Sobrepeso' ,  min : 25.0 , max : 29.9 , classColor : 'overweight'} ,
    {rating : 'Obesidade' ,  min : 30.0 , max : 39.9 , classColor : 'obesity'} ,
    {rating : 'Obesidade Grave' ,  min : 40 , max : Infinity , classColor : 'severyObesity'} ,
  ]

  const rating = imcRating.filter((value) => {
       return imc >= value.min && imc <= value.max;
  })

  return (
    <div className={styles.container}>
      <div className={styles.info}>
          <h2>Seu IMC = {imc.toFixed(2)}</h2>
          {!imc ?
          <p>Situaçaõ Atual: </p> :
          <p>Situação Atual: 
            <span className={styles[rating[0].classColor]}> {rating[0].rating}</span>
          </p>
          }
          <p>Confira as classificações</p>
      </div>
      
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
              <th>Obesidade</th>
            </tr>
          </thead>

          <tbody className={styles.tableBody}>
            <tr>
              <td>Menor que 18,5</td>
              <td>Magreza</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Entre 18,5 e 24,9</td>
              <td>Normal</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Entre 25,0 e 29,9</td>
              <td>Sobrepeso</td>
              <td>I</td>
            </tr>

            <tr>
              <td>Entre 30,0 e 39,9</td>
              <td>Obesidade</td>
              <td>II</td>
            </tr>

            <tr>
              <td>Maior que 40,0</td>
              <td>Obesidade Grave</td>
              <td>III</td>
            </tr>
          </tbody>
        </table>
      </div>  

      <div>
        <button onClick={backToForm}>VOLTAR</button>
      </div>
    </div>
  )
}

export default TableImc