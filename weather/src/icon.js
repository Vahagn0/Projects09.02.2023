import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';



function Result({data,city,result,status}){
    let icon = ""
    if(data){
        //clean
      if( data.weather[0].description === "clear sky"){
        icon = <LightModeIcon />
      }
      //cloud
      else if(data.weather[0].description  === "few clouds" ||  data.weather[0].description  === "broken clouds"
       ||  data.weather[0].description  === "overcast clouds" ||  data.weather[0].description  === "scattered clouds"){
        icon = <CloudIcon />
      }
      //rain
      else if(data.weather[0].description  === "shower rain"||  data.weather[0].description  === "light rain"
      ||  data.weather[0].description  === "moderate rain" ||  data.weather[0].description  === "heavy intensity rain"
      ||  data.weather[0].description  === "very heavy rain" ||  data.weather[0].description  === "extreme rain"
      ||  data.weather[0].description  === "freezing rain" ||  data.weather[0].description  === "	light intensity shower rain"
      ||  data.weather[0].description  === "heavy intensity shower rain" ||  data.weather[0].description  === "ragged shower rain"){
        icon = <ThunderstormIcon />
      }
      //snow
      else if(data.weather[0].description  === "Snow"  || data.weather[0].description  === "light snow"
      ||  data.weather[0].description  === "Heavy snow" ||  data.weather[0].description  === "Sleet"
      ||  data.weather[0].description  === "Light shower sleet" ||  data.weather[0].description  === "Shower sleet"
      ||  data.weather[0].description  === "Light rain and snow" ||  data.weather[0].description  === "	Rain and snow"
      ||  data.weather[0].description  === "Light shower snow" 
      ||  data.weather[0].description  === "Heavy shower snow"){
        icon = <AcUnitIcon />
      }
    }
    return(
      <div className="textAreaDiv">
         <span className="textArea">
          {`in ${city} is ${result} celcius and there is ${status}`}
          {icon}
          </span>
      </div>
    )
  }

  export default Result