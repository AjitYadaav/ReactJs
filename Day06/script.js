import React,{useState}  from "react";
import ReactDOM from 'react-dom/client'
// import clickSound from './assets/mouse click.mp3'

function Counter(){
    let [count,setCount] = useState(0);//usestate gives us array in return 

    const handleDecrement = () =>{
        count = count - 1;
        setCount(count);
        // document.querySelector('h1').innerText = `count is ${count}`;
    }

    const handleIncrement = () =>{
        count = count +1;
        setCount(count);
        // document.querySelector('h1').innerText = `count is ${count}`;
    }
     
    return (
        <div className="container">
            <h1>Count is : {count} </h1>
            
            <div className="functional-btns">
                <button onClick={handleIncrement}>Increment :{count}</button>
                <button onClick={handleDecrement}>Decrement :{count}</button>  
            </div>

            <div>
                <h1>{new Date().toLocaleDateString()}</h1>
            </div>
        </div>
    )
}

function App(){
    return(
        <div>
            <Counter/>
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)
