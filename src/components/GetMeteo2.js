import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { icon } from '../tools/Icon';
import formatTime from '../tools/day';
import './GetMeteo.css';

const GetMeteo2 = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState('');

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   
    return date.toLocaleDateString('fr-FR', options);
  
  };

  useEffect(() => {
    axios
      .get('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,rain&daily=weathercode,precipitation_sum,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon&forecast_days=7&current_weather=true')
      .then(response => {
        setWeatherData(response.data);
        
        if (response.data.daily && response.data.daily.time[0]) {
          const formattedDate = formatDate(response.data.daily.time[0]);
          setDayOfWeek(formattedDate);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la requête GET :', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className='container1'>
      <h2>Aujourd'hui :</h2>
      <div className='weather-icon'>
        {icon[weatherData.current_weather.weathercode]}
      </div>
      <div className='weather-info'>
        <p>📅 {dayOfWeek}</p>
        <p>📍 Longitude : {weatherData.longitude} | Latitude {weatherData.latitude}</p>
        <p>☔ {weatherData.hourly.rain[0]}</p>
        <p>🌡️ Min : {weatherData.daily.temperature_2m_min[0]}{weatherData.daily_units.temperature_2m_min}| Max : {weatherData.daily.temperature_2m_max[0]}{weatherData.daily_units.temperature_2m_max}</p>
        <p>💨 {weatherData.daily.windspeed_10m_max[0]}{weatherData.daily_units.windspeed_10m_max}</p>
        <p>🌄 {formatTime(weatherData.daily.sunrise[0])}</p>
        <p>🌇 {formatTime(weatherData.daily.sunset[0])}</p>
      </div>
    </div>
  );
}

export default GetMeteo2;