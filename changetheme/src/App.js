import { useContext, useState } from 'react'
import './App.css'
import { CartContext } from './components/CounterContext'
import Checkfunction from './components/Checkfunction'

function App() {
   
  const {changedata,setChangedata} = useContext(CartContext)
  const handelChange = ()=>{
           setChangedata(!changedata)
  }
  return (

    <div style={{background:(changedata?"green":"red")}}>
      
      <p>This is my Context Data:{changedata}</p>

      <button onClick={handelChange}>add</button>
       <Checkfunction/>
    </div>
  )
}

export default App
