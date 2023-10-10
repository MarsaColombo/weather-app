import React, { useEffect, useState } from 'react';
import axios from 'axios'
 const GetMeteoWeek = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,rain&daily=precipitation_sum,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon&forecast_times=7').then(response => {
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
    <div key={i}>
      <h1>Données météo du : {time} :</h1>
      <p>Date : {time}</p>
    
      <p>Pluie : {weatherData.daily.precipitation_sum[i + 1]}</p>
      <p>Température : Min : {time.temperature_2m_min}{weatherData.daily_units.temperature_2m_min} | Max : {time.temperature_2m_max}{weatherData.daily_units.temperature_2m_max}</p>
      <p>Vent : {time.windspeed_10m_max}{weatherData.daily_units.windspeed_10m_max}</p>
      <p>Lever du Soleil : {time.sunrise}</p>
      <p>Coucher du Soleil : {time.sunset}</p>
    </div>
  ))
  );
}
 
export default GetMeteoWeek;
