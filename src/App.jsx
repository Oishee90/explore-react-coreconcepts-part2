import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'


function App() {
  
  function handleClick(){
    alert('handleClick1')
  }
  const handleClick2 = () =>{
    alert('handleClick2')
  }
  function addClick(num){
    alert(num + 3)
  }

  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
       <User></User>
      <Team></Team>
     <Counter></Counter>
        <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick2}>Click me</button>
        <button onClick={() => {alert ('third clicked')}}>Third</button>
        <button onClick={() =>  addClick(5)}>Fourth</button>
    
     
    </>
  )
}

export default App
