import reactDOM from 'react-dom/client'


function App(){
    return(
        <>
            <h1>Hi there</h1>
        </>
    )
}
const reactRoot = reactDOM.createRoot(document.getElementById('root'))
reactRoot.render(<App/>) 