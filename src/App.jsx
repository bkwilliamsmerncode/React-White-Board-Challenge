import React, { useState } from 'react'
import './App.css';
import Circle from './Components/Circle';


function App() {

  const [circle, setCircle] = useState([]);
  const [undo, setUndo] = useState([]);



  const handleClick = (e) => {
    e.preventDefault()
    let circle = {
      X: e.clientX,
      Y: e.clientY
    }
    setCircle(prev => [
      ...prev, circle
    ])
    console.log(e)
  }

  const handleUndo = (e) => {
    e.preventDefault()
    console.log(circle[-1])
    if (circle.length) {
      setUndo(prev => [...prev, circle[circle.length - 1]])
      setCircle(prev => prev.slice(0, -1))
    } 
    
  }

  const handleRedo = (e) => {
    e.preventDefault()
    if (undo.length) {
      setCircle(prev => [...prev, undo[undo.length - 1]])
      setUndo(prev => prev.slice(0, -1))
    }
  }




  return (
    <>
      <div id='top-whitoard'>
        <button onClick={(e) => handleUndo(e)} className='btn-whiteboard'>UNDO</button>
        <button onClick={(e) => handleRedo(e)} className='btn-whiteboard'>REDO</button>
      </div>
      <div id='main-whiteboard' onClick={(e) => handleClick(e)}>

        {
          circle.map((item) => <Circle item={item} />)
        }

      </div>
    </>
  );
}

export default App;
