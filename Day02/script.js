//what is React 
//-> react is js Library 
//what ever we can do with js can also possible react 

//just like in c++ we use STL like arr.push_back, pop_back , this push_back and pop_back code is also written for there implementation but with the help of stl we find easy to use 


//so lets create our own react from scratch

/*
const header1 = document.createElement('h1');
header1.innerText="Hi I'm Ajit Yadav.";
header1.style.backgroundColor = "red";

const header2 = document.createElement('h1');
header2.innerText="Hi I'm Ajit Yadav.";
header2.style.backgroundColor = "pink";


const root = document.getElementById('root');

root.append(header1)
root.append(header2)

*/


//since it is taking to much time 
//so lets create function 

// styles = {fontSize:"30px",backgroundColor:"orange"};

const ReacDOM = {
    render:function(element,root){
        root.append(element);
    }
}

const React = {
    createElement:function(tag,styles,children){
        const element = document.createElement(tag);

        if(typeof children === 'object'){
            for(let child of children)
                element.append(child);
        }
        else
            element.innerText = children;

        for(let key in styles){
            element.style[key] = styles[key];
        }
        return element;
    }
}


const header1 = React.createElement('h1',{fontSize:"30px",backgroundColor:"orange",textAlign:'center',color:'rgb(32, 6, 73)'},"Hi, welcome to Mini-React");
const para = React.createElement('p',{fontSize:"17px",backgroundColor:"blue",color:"white"},"This is a sample paragraph.")

// const root = document.getElementById('root')
// root.append(header1)
// root.append(para)
// ReacDOM.render(header1,root);
ReacDOM.render(header1,document.getElementById('root'));

//so react is object , reacDOM is also object 

const li1 = React.createElement('li',{},"HTML")
const li2 = React.createElement('li',{},"CSS")
const li3 = React.createElement('li',{},"JS")
const li4 = React.createElement('li',{},"React")

const Ul = React .createElement('ul',{backgroundColor:'grey',color:'white'},[li1,li2,li3,li4]);

ReacDOM.render(Ul,document.getElementById('root'));

