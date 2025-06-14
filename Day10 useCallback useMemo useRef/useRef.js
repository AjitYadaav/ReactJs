import react, { useRef, useState } from "react";  
import reactDOM from 'react-dom/client';

function App(){
    const [count,setCount] = useState(0);
    // let money = 0;
    let money = useRef(0);

    // console.log(money.current)
    return(
        <>
            <h1 style={{textAlign:"center"}}>What is useRef Hook?</h1>
            <hr/>
            <h2>Counter is : {count}</h2>
            <button onClick={()=>setCount(count+1)}>increase</button>

            <h2>Money is:  {money.current}</h2>
            <button onClick={()=>{
                money.current += 1;
                console.log(money.current)
            }} >Increase money</button> 
        </>
    )
}

const reactRoot = reactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<App/>)

