import React, { useEffect, useState } from "react";
import sun from "./ui/sun.png";
import wind from "./ui/wind.png";
import axios from "axios";
const GetMeteoWeek = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,rain&daily=precipitation_sum,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon&forecast_times=7"
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    // Créez des éléments JSX pour chaque jour de la semaine
    weatherData.daily.time.slice(1).map((time, i) => (
      //   // <div key={i}>
      //   //   <h2>Données météo du {time} :</h2>
      //   //   <p>Pluie : {weatherData.daily.precipitation_sum[i + 1]}</p>
      //   //   <p>Température : Min : {weatherData.daily.temperature_2m_min[i + 1]}{weatherData.daily_units.temperature_2m_min} |
      //   //                     Max : {weatherData.daily.temperature_2m_max[i +1]}{weatherData.daily_units.temperature_2m_max}</p>
      //   //   <p>Vent : {weatherData.daily.windspeed_10m_max[i + 1]}{weatherData.daily_units.windspeed_10m_max}</p>
      //   //   <p>Lever du Soleil : {weatherData.daily.sunrise[i + 1]}</p>
      //   //   <p>Coucher du Soleil : {weatherData.daily.sunset[i + 1]}</p>
      //   // </div>
      // ))
      <div key={i}>
        <div className="jour h-full  rounded-xl shadow-xl p-4 flex flex-col items-center justify-center">
          <h1> {time} </h1>
          <p>01/12</p>

          <div className="flex justify-around items-center ">
            <img src={sun} alt="" className="h-6 w-6 "></img>
            <p>
              {" "}
              {weatherData.daily.sunrise[i + 1]} /{" "}
              {weatherData.daily.sunset[i + 1]}
            </p>
          </div>

          <div className="flex justify-around items-center ">
            <img src={wind} alt="" className="h-6 w-6 "></img>
            <p>{weatherData.daily.precipitation_sum[i + 1]}</p>
          </div>
          <span>
            {" "}
            {weatherData.daily.temperature_2m_min[i + 1]}
            {weatherData.daily_units.temperature_2m_min}/{" "}
            {weatherData.daily.temperature_2m_max[i + 1]}
            {weatherData.daily_units.temperature_2m_max}{" "}
          </span>
        </div>
      </div>
    ))
  );
};

export default GetMeteoWeek;
