function Bakcground({data}){
    let img = "https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99999&width=1200&height=675&x=1.0E-5&y=1.0E-5"

    if(data){
        //clean
      if( data.weather[0].description === "clear sky"){
        img = "https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99999&width=1200&height=675&x=1.0E-5&y=1.0E-5"
      }
      //cloud
      else if(data.weather[0].description  === "few clouds" ||  data.weather[0].description  === "broken clouds"
       ||  data.weather[0].description  === "overcast clouds" ||  data.weather[0].description  === "scattered clouds"){
        img = "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
      }
      //rain
      else if(data.weather[0].description  === "shower rain"||  data.weather[0].description  === "light rain"
      ||  data.weather[0].description  === "moderate rain" ||  data.weather[0].description  === "heavy intensity rain"
      ||  data.weather[0].description  === "very heavy rain" ||  data.weather[0].description  === "extreme rain"
      ||  data.weather[0].description  === "freezing rain" ||  data.weather[0].description  === "	light intensity shower rain"
      ||  data.weather[0].description  === "heavy intensity shower rain" ||  data.weather[0].description  === "ragged shower rain"){
        img = "https://s7d2.scene7.com/is/image/TWCNews/heavy_rain_jpg-6"
      }
      //snow
      else if(data.weather[0].description  === "Snow"  || data.weather[0].description  === "light snow"
      ||  data.weather[0].description  === "Heavy snow" ||  data.weather[0].description  === "Sleet"
      ||  data.weather[0].description  === "Light shower sleet" ||  data.weather[0].description  === "Shower sleet"
      ||  data.weather[0].description  === "Light rain and snow" ||  data.weather[0].description  === "	Rain and snow"
      ||  data.weather[0].description  === "Light shower snow" 
      ||  data.weather[0].description  === "Heavy shower snow"){
        img = "https://static01.nyt.com/images/2019/11/26/us/26holiday-weather01sub/26holiday-weather01sub-mobileMasterAt3x.jpg"
      }else if(data.weather[0].description  === "mist" || data.weather[0].description  === "Smoke" 
    || data.weather[0].description  === "haze" || data.weather[0].description  === "dust whirls"
    || data.weather[0].description  === "sand" || data.weather[0].description  === "fog"
    || data.weather[0].description  === "dust" || data.weather[0].description  === "volcanic ash"
    || data.weather[0].description  === "squalls" || data.weather[0].description  === "tornado"){
        img = "https://www.westend61.de/images/0000881371pw/scenic-view-of-field-during-foggy-weather-CAVF24249.jpg"
      }
    }
   return(
    <img src={img} className="backgroundImg"/>
   )
  }


export default Bakcground