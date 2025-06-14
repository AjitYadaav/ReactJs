
const element = React.createElement("h1",{id:"first",className:"ajit",style:{backgroundColor:"red"}},"Hello I'm ajit Yadav");
const element2 = React.createElement("h2",{id:"second",className:"ajit",style:{backgroundColor:"red"}},"I am Getting all , i am very happy");


const Reactroot = ReactDOM.createRoot(document.getElementById('root'))

const div1 = React.createElement('div',{},[element,element2]);
Reactroot.render(div1)

// Reactroot.render(element)
// Reactroot.render(element2)

//if any code is present inside div#root , then first it will clear all the code and then it only shows the render one (new One)

//but what if i want both h1 and h2 on the screen since now it's only showing h2


//since the code is being length 

/*
<div>
    <div>
        <h1>
            <p>hello react</p>
        </h1>
    </div>
</div>

JSX

*/