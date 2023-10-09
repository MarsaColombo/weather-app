import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GetMeteo = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Effectue une requête GET vers l'API Open Meteo
    axios
      .get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
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
      <p>Date et heure : {weatherData.current_weather.time}</p>
     <p>Température : {weatherData.current_weather.temperature} °C</p>
     <p>Vitesse du vent : {weatherData.current_weather.windspeed} m/s</p>
    {/* Autres données météo ici */}
    </div>
  );
}

export default GetMeteo;
