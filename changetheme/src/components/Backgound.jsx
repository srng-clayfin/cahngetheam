import { useState } from "react"


export const Backgound = () =>
{
    var clrs = [
        {
            value : 1,
            clr : "black",
            fnt : "White"
        },
        {
            value : 2,
            clr : "White",
            fnt : "Black"
        }
    ]
    
    const [bgcolor,setBgcolor] = useState(clrs.clr)

    const changecolor = (e) =>
    {
        setBgcolor(e.target.value)
    }

    const handlebutton = () =>
    {

    }

    console.log(bgcolor)
    return(
        <>
            <div>
                <style>{'body {background-color:'+bgcolor+';}'}</style>
                <select onChange={changecolor}>
                    <option value={"White"}>White</option>
                    <option value={"Black"}>Black</option>
                </select>

                <button onClick={handlebutton}>Change theme</button>
            </div>
        </>
    )
}