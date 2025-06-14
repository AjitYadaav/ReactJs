//now using CND we can do the same think without writing a lots of code 

const element = React.createElement("h1",{id:"first",className:"ajit",style:{backgroundColor:"red"}},"Hello I'm ajit Yadav");
const element2 = React.createElement("h2",{id:"second",className:"ajit",style:{backgroundColor:"red"}},"Hello I'm ajit Yadav");

// ReactDOM.render(element,document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('root'))
//this is using before react18


const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
Reactroot.render(element)


//js is single threaded where as react is multithreaded
