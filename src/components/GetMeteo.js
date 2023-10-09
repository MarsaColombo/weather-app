import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GetMeteo = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Effectue une requête GET vers l'API Open Meteo
    axios
      .get('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,rain&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon&forecast_days=1')
      .then(response => {
        // Met à jour l'état avec les données de la réponse
        setWeatherData(response.data);
        console.log(response)
      }) 
      .catch(error => {
        console.error('Erreur lors de la requête GET :', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Chargement en cours...</div>;
  }



  return (
    <div>
     <h1>Données météo actuelles " Berlin Par défault":</h1>
      <p>Date : {weatherData.daily.time}</p>
      <p>Lieu : Longitude : {weatherData.longitude} | Latitude {weatherData.latitude}</p>
      <p>Pluie : {weatherData.hourly.rain}</p>
      <p>Temperature : Min : {weatherData.daily.temperature_2m_min}{weatherData.daily_units.temperature_2m_min}| Max :  {weatherData.daily.temperature_2m_max}{weatherData.daily_units.temperature_2m_max}</p>
      <p>Vent : {weatherData.daily.windspeed_10m_max}{weatherData.daily_units.windspeed_10m_max}</p>
      <p>Lever du Soleil : {weatherData.daily.sunrise}</p>
      <p>Coucher du Soleil : {weatherData.daily.sunset}</p>


    {/* Autres données météo ici */}
    </div>
  );
}

export default GetMeteo;
