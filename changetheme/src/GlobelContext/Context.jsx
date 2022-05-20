import { createContext, useState } from "react";

export const CartContext  = createContext();


export const FunctionContext = ({children})=>{

    const [changedata,setChangedata] = useState(true)
    
    return <CartContext.Provider value={{changedata,setChangedata}}>{children}</CartContext.Provider>
}