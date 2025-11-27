import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter]=useState(15)
   const addValue = ()=>{
    
    if(counter===20){
      setCounter(counter)
    }
    else{
      setCounter(counter+1)
    }
   }
   const removeValue=()=>{
    if(counter===0){
     setCounter(counter)
    }
    else{
      setCounter(counter-1)
    }
   }
   
  return (
    <>
      <div>
<h1>chai or react</h1>
<h2>counter value {counter}</h2>
<button onClick={addValue}>add value {counter}</button>
<button onClick={removeValue}>remove value{counter}</button>
        </div>
    </>
  )
}

export default App
