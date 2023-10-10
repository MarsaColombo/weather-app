
import axios from 'axios';
import { useState, useEffect } from 'react';

const options = { weekday: 'long' };

const FetchApi = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const FetchApi = async () => {
        try {
            const response = await axios.get(
                'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FBerlin'
            );
            console.log(response)
            setForecastData(response.data);
        } catch (error) {
            console.error('Une erreur est survenue:', error);
        }
    };

    FetchApi();
    
}, []);

  
return (
    <div>
    {forecastData ? (
        <div className='cardJour'>
            <p className='date'>{new Date (forecastData.daily.time[0]).toLocaleDateString()}</p>
            <p>📅{' '}{new Date (forecastData.daily.time[0]).toLocaleDateString('fr-FR', options)}</p>
            <p>​🔥​{' '}{forecastData.daily.temperature_2m_max[0]}°C</p>
            <p>❄️{' '}{forecastData.daily.temperature_2m_min[0]}°C</p>
            <p>☀️{' '}{new Date(forecastData.daily.sunrise[0]).toLocaleTimeString()}</p>
            <p>🌜{' '}{new Date(forecastData.daily.sunset[0]).toLocaleTimeString()}</p>
            <p>💨{' '}{forecastData.daily.windspeed_10m_max[0]} m/s</p>
        </div>
    ) : (
        <p>Chargement des données météorologiques...</p>
    )}
</div>)
}
export default FetchApi



    

   

 
       




