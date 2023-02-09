import './App.css';
import { useEffect, useState } from 'react';
import { TextField,Button } from '@mui/material';
import Result from './icon';
import Bakcground from './background';

function App() {
  
    let [city,setCity] = useState("")
    let [result,setResult] = useState("")
    let [show,setShow] = useState(false)
    let [data,setData] = useState("")
    let [status,setStatus] = useState("")
  
    return (
      <div className='main'>
        <div>
          <form onSubmit={(e)=>{
            e.preventDefault()
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=dcedc9f6a3375687009f75babf7cb35b`)
            .then((response) => response.json())
            .then((data) => {
            setData(data)
            setStatus(data.weather[0].description)
            if(data){
            setResult(Math.round((data.main.temp - 32) * 5/9 ))
              } } );
            setCity(city)
            setShow(true)
          }}>
            <TextField label="country" className= "input" onChange={(evt)=>{
              city = evt.target.value
            }}/>
            <Button variant="contained" className="result">result</Button>
          </form>
        </div>
        {show && 
          <Result 
            data = {data}
            city = {city}
            result = {result}
            status = {status}
          />
        }
        <Bakcground 
         data = {data}
        />
      </div>
    );

}


export default App;
