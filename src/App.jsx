import './App.css'
import Calculator from './components/Calculator'
import TableImc from './components/TableImc'
import {useState } from 'react';

function App() {
  const [height , setHeight] = useState('');
  const [weight , setWeight] = useState(''); 
  const [control , setControl] = useState(true);

  const dataUpdate = (newHeight , newWeight) => {
    setHeight(newHeight);
    setWeight(newWeight);
  }

  return (
    <>
    {control ? <Calculator data={dataUpdate} setControl={setControl}/> 
            : <TableImc height={height} weight={weight} setControl={setControl}></TableImc> 
    }
    </>
  )
}

export default App
