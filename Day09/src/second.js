//useRef hook 
import React, { useMemo, useState } from "react";  
import ReactDOM from "react-dom/client";

//useMemo hook
//1.counter button : increase
//2. input field : Fibonaci number 
// 0 1 1 2  3 5 8 13 21 34


const App = () => {
    const [count,setCount] = useState(0);
    // const [money,setMoney] = useState(0);
    let money = 0;
    return(
        <>
            <h1>Counter is { count}</h1>
            <h2>hello</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Money is: {money}</h1>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        
        </>
    )
    
  
}


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)