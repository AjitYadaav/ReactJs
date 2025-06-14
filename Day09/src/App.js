import React, { useMemo, useState } from "react";  
import ReactDOM from "react-dom/client";

//useMemo hook
//1.counter button : increase
//2. input field : Fibonaci number 
// 0 1 1 2  3 5 8 13 21 34


const Second = () => {

    const Fibonacci = (n) =>{
        if(n <=1 ) return n;
        return Fibonacci(n-1)+Fibonacci(n-2);   
    }
    
    
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(0);

    const result  = useMemo(()=>Fibonacci(number),[number]);
    // const result = Fibonacci(number);


  return (
    <>
        <h1>counter is : {count}</h1>  
        <button onClick={()=>setCount(count+1)}>Increment</button>   
        <button onClick={() => setCount(count-1)}>Decrement</button>

        <div>
            <h2>Fibonacci number is :{result}</h2>
            <p style={{color:"black"}}>Enter the value of n:</p>
            <input type="number"  value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        </div>
    </>
  )
}


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<Second/>)