import { useState } from 'react';

function SignUp(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [users,setUsers] = useState([])


    return(
    <div className="App">
      <form onSubmit={(e)=>{
        e.preventDefault()
        
        fetch('http://localhost:3001/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password
          })
          })
          .then(response => response.json())
          .then((users)=> setUsers(users))
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
      {
        users.map(user =>{
          return(
            <div key={user.id}>
              <p>username: {user.username}</p>
              <p>password: {user.password}</p>
            </div>
          )
        })
      }
    </div>
    )
}

export default SignUp