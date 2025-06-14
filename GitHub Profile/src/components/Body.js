import { useEffect, useState } from "react"

const Body = () => {

    const [profile,setProfile] = useState([]);

    async function generateProfile(){
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setProfile(data);
    }

    useEffect(()=>{
        generateProfile();
    },[])

  return (
    <div>
        <button onClick={generateProfile}>Load GitHub Profile</button>
        <div className="container">
            {profile.map((prof)=>(
            <div key={prof.id} className="card">
               <img src={prof.avatar_url}></img>
               <h1>{prof.login}</h1>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Body