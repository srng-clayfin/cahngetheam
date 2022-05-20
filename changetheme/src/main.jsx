import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FunctionContext } from './Context/CounterContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FunctionContext>

    <App />
    </FunctionContext>
  </React.StrictMode>
)
