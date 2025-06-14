import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement("h1",{id:"first",className:"ajit",style:{backgroundColor:"red"}},"Hello I'm ajit Yadav");
// const element2 = React.createElement("h2",{id:"second",className:"ajit",style:{backgroundColor:"red"}},"I am Getting all , i am very happy");


                 //React                         Render
//React.createElement => react element(JSobject) => HTML Element


//JSX
// const newElement = <h1>Hello AlgoInk</h1>
//React.createElement('h1',{},"Hello AlogInk") 

//  babel                      React                       Render
//JSX => React.createElement() => react element (JSobject ) => HTML element

// const Reactroot = ReactDOM.createRoot(document.getElementById('root'))

// const div1 = React.createElement('div',{},[element,element2]);
// Reactroot.render(div1)

// Reactroot.render(newElement);


const name = "AlgoInk";

const newElement = (
    <>
        <h1 style={{background:"gray",textAlign:'center',color:"white"}}>Welcome to {name}</h1>
        <p id="first">Let's master your concepty with dry run </p>
    </>
)

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(newElement)


//JSX :Javascript XML: it means that we can write HTML like code in js.



//react components
// class Based components ❌
// functional components ✅

const Greeting = function greet(){
    return <h1>Good morning bro</h1>
}
const Meet = function meet(){
    return <h2>can we meet tommorow at 5pm??</h2>
}

Reactroot.render(<Greeting/>);
Reactroot.render(<Meet/>)

