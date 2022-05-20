import { useContext } from 'react';
import './App.css';
import { CartContext } from './GlobelContext/Context';

function App() {

  const {changedata,setChangedata} = useContext(CartContext)
  const handelChange = ()=>{
           setChangedata(!changedata)
  }
  return (   
        <div style={{background:(changedata?"black":"white"),height:"98vh" ,width:"100%"}}>
      
            <p style={{color:changedata?"white":"black"}}>This is my Context Data:{changedata}</p>

            <button style={{background:changedata?"white":"black"}} onClick={handelChange}>------------</button>
      
        </div>    
  );
}

export default App;
