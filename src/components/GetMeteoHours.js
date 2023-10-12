import React, { useEffect, useState } from 'react';
import axios from 'axios';
import formatTime from '../tools/day';
import './GetMeteo.css';

const GetMeteoHours = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,rain&daily=weathercode,precipitation_sum,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon&forecast_days=7&current_weather=true')
      .then(response => {
        setWeatherData(response.data);
      })
    
      .catch(error => {
        console.error('Erreur lors de la requête GET :', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Chargement en cours...</div>;
  }

  
  // Récupère la date et l'heure actuelle
  const currentDate = new Date();
  const currentHour = currentDate.getHours();


    // Filtrer les données horaires pour afficher uniquement les heures d'aujourd'hui
    const hourlyDataToday = weatherData.hourly.time.reduce((acc, timestamp, i = currentHour) => {
        const hourDate = new Date(timestamp);
        // Comparer la date de l'heure actuelle avec la date de l'heure horaire
        if (
          hourDate.getDate() === currentDate.getDate() &&
          hourDate.getMonth() === currentDate.getMonth() &&
          hourDate.getFullYear() === currentDate.getFullYear()
        ) {
          acc.push({
            time: timestamp,
            temperature: weatherData.hourly.temperature_2m[i],
            rain: weatherData.hourly.rain[i],
          });
        }

        return acc;
      }, []);



  return (
    <div className='container4'>
      <h2>Prévisions météo pour aujourd'hui :</h2>
     
      <div className='hourly-forecast'>
        {hourlyDataToday.map((hourlyData, i) => (
          <div key={i} className='hourly-card'>
            <p>⏰{formatTime(hourlyData.time)}</p>
            <p>🌡️{hourlyData.temperature}{weatherData.hourly_units.temperature_2m}</p>
            <p>☔{hourlyData.rain}</p>
            {/* <p>⏰ {formatTime(weatherData.hourly.time[i])}</p>
            <p>🌡️ Température : {weatherData.hourly.temperature_2m[i]}{weatherData.hourly_units.temperature_2m}</p>
            <p>☔ Précipitations : {weatherData.hourly.rain[i]}</p> */}
            {/* <p>💨 Vent : {weatherData.hourly.windspeed_10m[i]}{weatherData.hourly_units.windspeed_10m}</p> */}
          </div>
      
        ))}
      </div>
    </div>
  );
}

export default GetMeteoHours;
