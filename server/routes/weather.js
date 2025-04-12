const express = require('express');
const axios = require('axios');
const weatherRouter = express.Router();

weatherRouter.get('/', async (req, res) => {
  const { city } = req.query;

  //Error Area
  if (!city) {
    return res.status(400).json({ error: 'Fill the city name' });
  }
  const API_KEY = process.env.OpenWeatherApp_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(URL);
    const { main, weather, wind } = response.data;

    res.json({
      temperature: main.temp,
      condition: weather[0].description,
      icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      humidity: main.humidity,
      windSpeed: wind.speed,
    });
  } catch (error) {
    res.status(404).json({ error: ' Sorry, City not found' });
  }
});

module.exports = weatherRouter;
