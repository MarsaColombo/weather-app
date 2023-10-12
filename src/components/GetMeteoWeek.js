import React, { useEffect, useState } from 'react';
import './GetMeteoWeek.css'
import axios from 'axios'
import formatTime from '../tools/day'

 const GetMeteoWeek = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [dayOfWeek, setDayOfWeek] = useState('');

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   
    return date.toLocaleDateString('fr-FR', options);
  
  };
//   const option = {weekday : "long"}

  useEffect(() => {

    axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,rain&daily=weathercode,precipitation_sum,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon&forecast_days=7&current_weather=true')
    .then(response => {
        setWeatherData(response.data);
        setLoading(false);
    })
  }, []);
  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }
  

      
  return ( 
 
      // Créez des éléments JSX pour chaque jour de la semaine
   weatherData.daily.time.slice(1).map((time, i) => (
    <div className='container3'>
    <div key={i} className='container2'>
      <div>
      <div>
      <h3> {dayOfWeek}</h3>
      <p>☔ {weatherData.daily.precipitation_sum[i + 1]}</p>
      <p>🌡️ Min : {weatherData.daily.temperature_2m_min[i + 1]}{weatherData.daily_units.temperature_2m_min} | 
                        Max : {weatherData.daily.temperature_2m_max[i +1]}{weatherData.daily_units.temperature_2m_max}</p>
      <p>💨 {weatherData.daily.windspeed_10m_max[i + 1]}{weatherData.daily_units.windspeed_10m_max}</p>
      <p>🌄 {formatTime(weatherData.daily.sunrise[i + 1])}</p>
      <p>🌇 {formatTime(weatherData.daily.sunset[i + 1])}</p>
    </div>
    </div>
    </div>
    </div>

  ))
  );
}
 
export default GetMeteoWeek;
