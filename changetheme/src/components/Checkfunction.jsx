import React, { useContext } from 'react'
import { CartContext } from './CounterContext'
import './Check.css'

export default function Checkfunction() {
    const {changedata,setChangedata} = useContext(CartContext)
  return (


    <div className='check'>
        {changedata?
            <div>this is check true</div>   : <h1>This is false</h1> 
    }
    </div>

  )
}
