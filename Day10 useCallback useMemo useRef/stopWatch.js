import { useRef, useState } from "react";
import reactDOM from "react-dom/client";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function start() {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        // setTime(time+1);
        setTime((prevTime) => prevTime + 1);
        // console.log(time)
      }, 1000);
      setIsRunning(true);
    }
    //setInterval: setTime(time+1) call it after every one sec
  }

  //intervalRef se bhi to karsakte haina ???

  function stop() {
    if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false)
    }
  }

  function reset() {
    setTime(0);
    stop();
  }

  return (
    <>
      <h1>Stop Watch is : {time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

const reactRoot = reactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
