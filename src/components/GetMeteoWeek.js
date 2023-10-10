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
      <h2>Données météo du {time} :</h2>
      <p>Pluie : {weatherData.daily.precipitation_sum[i + 1]}</p>
      <p>Température : Min : {weatherData.daily.temperature_2m_min[i + 1]}{weatherData.daily_units.temperature_2m_min} | 
                        Max : {weatherData.daily.temperature_2m_max[i +1]}{weatherData.daily_units.temperature_2m_max}</p>
      <p>Vent : {weatherData.daily.windspeed_10m_max[i + 1]}{weatherData.daily_units.windspeed_10m_max}</p>
      <p>Lever du Soleil : {weatherData.daily.sunrise[i + 1]}</p>
      <p>Coucher du Soleil : {weatherData.daily.sunset[i + 1]}</p>
    </div>
  ))
  );
}
 
export default GetMeteoWeek;
