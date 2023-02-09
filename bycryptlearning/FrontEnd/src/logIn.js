import { useEffect, useState } from 'react';

function LogIn(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [loggedIn,setLoggedIn] = useState(".")

  useEffect(()=>{
    fetch('http://localhost:3001/logIn')
      .then((response) => response.json())
      .then((data) => console.log(data));
  },[])

    return(
    <div className="App">
        <h1>Log In</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        fetch('http://localhost:3001/logIn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password
          })
          })
          .then(response => response.json())
          .then((res)=> {setLoggedIn(res.message, 'resk')})
      }}>
        <input type="text" placeholder='username' onChange={(e)=>{
          e.preventDefault()
          setUsername(e.target.value)
        }}/>
        <input type="password" placeholder='password' onChange={(e)=>{
          e.preventDefault()
          setPassword(e.target.value)
        }}/>
        <button>sumbit</button>
      </form>
      <p>{loggedIn}</p>
    </div>
    )
}

export default LogIn