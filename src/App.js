import React,{useState} from 'react'
import './App.css'
function App(){
  const apiKey =  'c944707ce4751771635c5c71dbb73f20'
  const [weatherData, setWeatherData] = useState([{}])
  const [city,setCity] =  useState("")

  const getWeather = (event) => {
    if(event.key == "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`).then
      (response => response.json()).then(data => {
          setWeatherData(data)
          setCity("")
        }) 
      }
    }
  
  return(
    
    <div className = "container">
      <input 
      className = "input" 
      placeholder = "Enter city..."
      onChange={e => setCity(e.target.value)}
      value = {city}
      onKeyPress = {getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>Welcome to the best Weather App! Enter in a city that you would like to get the weather of.</p>
        </div>
      ):(
        <div className = 'weather-data'>
          <p className = 'city'>
            {weatherData.name}
          </p>
          <p className = 'temp'>
            {Math.round(weatherData.main.temp)}F
          </p>
          <p className = 'weather'>
            {weatherData.weather[0].main}
          </p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City doesn't exist :/ xd</p>
      ):(
        <>
        </>
      )}
    </div> 
  )
}
export default App