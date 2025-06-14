import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Password from "./components/Password";



function App(){
    return(
        <div>
            <Password/>
        </div>
    )  
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)