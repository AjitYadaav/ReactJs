import { useEffect, useState } from "react";

//Password:A234ZqT,setPassword()
//length:10,setLength()
//numberChanged : false, setNumberChanged()
//characterChanged:false, setCharacterChanged()

const Password = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [numberChanged, setNumberChanged] = useState(true);
  const [characterChanged, setCharacterChanged] = useState(false);

  const GeneratePassword = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLLMNOPQRSTUVWXYZ";

    if (numberChanged) {
      str += "0123456789";
    }
    if (characterChanged) {
      str += "+-$#@%~!{}*^`";
    }

    let pass = "";
    for(let i = 0; i<length;i++){
        pass += str[Math.floor(Math.random()*str.length)];
    }

    setPassword(pass);

  };

  useEffect(()=>{
     GeneratePassword();
  },[length,numberChanged,characterChanged])

  return (
    <div className="container">
      <h1>Password is :{password}</h1>
      <div>
        <input
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label>length({length}) </label>

        <input
          type="checkbox"
          defaultChecked={numberChanged}
          onChange={() => setNumberChanged(!numberChanged)}
        ></input>
        <lable>Number</lable>

        <input
          type="checkbox"
          defaultChecked={characterChanged}
          onChange={() => setCharacterChanged(!characterChanged)}
        ></input>
        <lable>Character</lable>
      </div>
    </div>
  );
};

export default Password;
