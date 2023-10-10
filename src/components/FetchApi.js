
import axios from 'axios';
import { useState, useEffect } from 'react';



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
            <p>Température maximale: {forecastData.daily.temperature_2m_max[0]}°C</p>
            <p>Température minimale: {forecastData.daily.temperature_2m_min[0]}°C</p>
            <p>
                Lever du soleil:{' '}
                {new Date(forecastData.daily.sunrise[0]).toLocaleTimeString()}
            </p>
            <p>
                Coucher du soleil:{' '}
                {new Date(forecastData.daily.sunset[0]).toLocaleTimeString()}
            </p>
            <p>Vitesse maximale du vent: {forecastData.daily.windspeed_10m_max[0]} m/s</p>
        </div>
    ) : (
        <p>Chargement des données météorologiques...</p>
    )}
</div>)
}
export default FetchApi



    

   

 
       




