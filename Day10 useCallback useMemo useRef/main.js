import react, { useCallback, useState } from "react";  
import reactDOM from 'react-dom/client';
import { useMemo } from "react";



// 0 1 1 2 3 5 8 13 21 34
//recursive code : O(2^n)
// function Fibonnaci(n){
//         if(n<=1)return n;
//         return Fibonnaci(n-1)+Fibonnaci(n-2);
//     }

function App(){
    //counter
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(2);

    const Fibonnaci = useCallback((n) => {
        if(n<=1) return n;
        return Fibonnaci(n-1)+Fibonnaci(n-2);
    });

    const result = useMemo(() => Fibonnaci(number), [number]);
    // const result = Fibonnaci(number);
    //useMemo(callbackFunction, []);

    //useEffect se ek render jyada lagraha hai 

    return(
        <>
            <h1>Counter is :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>

            <div>
                <h1>Fibonacci number is:{result} </h1>
                <input type="number" placeholder="Enter the number" onChange={(e)=>setNumber(e.target.value)}></input>
            </div>
        </>
    )
}

const reactRoot = reactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<App/>)