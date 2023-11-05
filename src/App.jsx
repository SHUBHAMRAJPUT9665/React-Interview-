import './App.css'
import  { useState } from 'react';

function App() {

  let [counter , setCounter]= useState(0)

  // let counter = 5

  const addValue = () => {
    console.log("values Added");
    counter = counter + 1
    setCounter(counter)
  }
  
const removeValue = () => {
  counter = counter - 1
    setCounter(counter)
}
  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
