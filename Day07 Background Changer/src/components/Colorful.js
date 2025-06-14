import { useState,useEffect } from "react";

export default function Colorful(){
    const [color,setColor] = useState("black");


    //useEffect(callback Function,dependency)
    useEffect(()=>{
        console.log('Use effect executed');
        document.body.style.backgroundColor = color;
    },[color])


    return(
        <div className="container">
            <h1>Background Color Changer</h1>
            <div className="color-changer-btn">
                <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
                <button style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
                <button style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>Yellow</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>{setColor("orange")}}>Orange</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
            </div>


        </div>
    )
}