import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

import weather_icon from './assets/wea.png'
const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)

  const fetchWeather = async (city) => {
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`)
      setWeatherData(res.data)
      setError('')
    } catch (err) {
      setWeatherData(null)
      setError('Sorry,City not found')
    }
    finally {
      setLoading(false) 
    }
  }

  return (
    <div className="App">
      <h1> <img src={weather_icon} alt="" className='wi' />Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      
      {}
      {loading && <p className="loading">Loading...</p>}
      
      {error && <p className="error">{error}</p>}
      <WeatherCard weather={weatherData} />
    </div>
  )
}

export default App
