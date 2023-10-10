
import axios from 'axios';
import { useState, useEffect } from 'react';

const options = { weekday: 'long' };

const MeteoSemaine = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const MeteoSemaine = async () => {
        try {
            const response = await axios.get(
                'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FBerlin'
            );
            setForecastData(response.data);
        } catch (error) {
            console.error('Une erreur est survenue:', error);
        }
    };

    MeteoSemaine();
}, []);

  
return (
    <div className='container'>
      {forecastData ? (
        forecastData.daily.temperature_2m_max
          .filter((temp, index) => index !== 0)
          .map((temp, index) => (
            <div className='card' key={index}>
              <p className='date'>{new Date (forecastData.daily.time[index + 1]).toLocaleDateString()}</p>
              <p>📅{' '}{new Date (forecastData.daily.time[index + 1]).toLocaleDateString('fr-FR', options)}</p>
              <p>​🔥​{' '}{forecastData.daily.temperature_2m_max[index + 1]}°C</p>
              <p>❄️ {' '}{forecastData.daily.temperature_2m_min[index + 1]}°C</p>
              <p>☀️ {' '}{new Date(forecastData.daily.sunrise[index + 1]).toLocaleTimeString()}</p>
              <p>🌜 {' '}{new Date(forecastData.daily.sunset[index + 1]).toLocaleTimeString()}</p>
            </div>
          ))
      ) : (
        <p>Chargement des données météorologiques...</p>
      )}
    </div>
  );
}

export default MeteoSemaine;


/** 
 * 
 */