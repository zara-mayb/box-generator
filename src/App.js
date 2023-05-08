import React, {useState} from 'react'
import './App.css';
import BoxGen from './components/BoxGen';
import Display from './components/Display';

function App() {
  const [boxes, setBox] = useState([ 
    {
      color:"red"
    }, 
    {
      color:"blue"
    }, 
    {
      color:"black"
    }
  ])
  const addBox = (newBox) => {
    setBox([...boxes,newBox])
  }
  return (
    <div className="App">
      <BoxGen addBox ={addBox}/>
      <Display boxes = {boxes}/>
    </div>
  );
}

export default App;
