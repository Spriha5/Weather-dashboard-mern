import React from 'react'
import '../App.css'
import tem_icon from '../assets/terma.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/windd.png'
const WeatherCard = ({ weather }) => {
  if (!weather) return null

  const { temperature, condition, icon, humidity, windSpeed } = weather

  return (
    <div className="weather-card">
      <img src={icon} alt="weather icon" />
      <h2>{condition}</h2>
      <p>
  <img src={tem_icon} alt="" className="te" style={{ width: '40px',height:'25px',  }} />
  Temperature: {temperature}°C
   </p>
 <p> <img src={humidity_icon} alt="" className="hu" style={{ width: '40px',height:'25px',  }} />
    Humidity: {humidity}%</p>
      <p> <img src={wind_icon} alt="" className="win" style={{ width: '40px',height:'25px',  }} /> Wind Speed: {windSpeed} m/s</p>
    </div>
  )
}

export default WeatherCard
