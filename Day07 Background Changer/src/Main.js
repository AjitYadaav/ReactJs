import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./components/Colorful";
//Background color changer

//color = Black
//re-render => call the function again


function Main(){
    return(
        <div>
            <Colorful/>
        </div>
    )
    
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<Main/>)