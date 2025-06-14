import React from "react";
import ReactDOM from "react-dom/client";
const Root = ReactDOM.createRoot(document.getElementById('root'))   

const element1 = <h1>Hello AlgoInk Champs</h1>  
//JSX : JS Expression (gives output)
//JSX:Statement (we can't write that)

// let obj = {
//     name:"ajit",
//     age:20
// };
// const arr = [20,40,'slok',499]

function Greet(propse) {
    console.log(propse)
    return <h1>Good morning {propse.name}</h1>
}

const elmts2 = <Greet name="ajit" age="20" />

//<div> <h1> <ul> . so to differentiate with tags we use Uppercase letter while writing Function <Greet/>


Root.render(elmts2)

// Root.render(element1)