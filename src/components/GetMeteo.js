import React, { useEffect, useState } from "react";
import sunrise from "./ui/sunrise.png";
import sunset from "./ui/sunset.png";
import raining from "./ui/raining.png";
import wind from "./ui/wind.png";
import temperature from "./ui/temperature.png";
import axios from "axios";

const GetMeteo = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Effectue une requête GET vers l'API Open Meteo
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m,rain&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max&timezone=Europe%2FLondon&forecast_days=7"
      )
      .then((response) => {
        // Met à jour l'état avec les données de la réponse
        setWeatherData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête GET :", error);
      });
  }, []);

  if (!weatherData) {
    return <div>Chargement en cours...</div>;
  }

  return (
    // <div>
    //  <h2>Données météo actuelles :</h2>
    //   <p>Date : {weatherData.daily.time[0]}</p>
    //   <p>Lieu : Longitude : {weatherData.longitude} | Latitude {weatherData.latitude}</p>
    //   <p>Pluie : {weatherData.hourly.rain[0]}</p>
    //   <p>Temperature : Min : {weatherData.daily.temperature_2m_min[0]}{weatherData.daily_units.temperature_2m_min}| Max :  {weatherData.daily.temperature_2m_max[0]}{weatherData.daily_units.temperature_2m_max}</p>
    //   <p>Vent : {weatherData.daily.windspeed_10m_max[0]}{weatherData.daily_units.windspeed_10m_max}</p>
    //   <p>Lever du Soleil : {weatherData.daily.sunrise[0]}</p>
    //   <p>Coucher du Soleil : {weatherData.daily.sunset[0]}</p>
    // </div>
    <div className=" h-screen flex justify-center items-center text-white ">
      <div
        id="dayForecastContainer "
        className="h-screen w-screen flex flex-col justify-around items-center m-4 "
      >
        <div
          id="firstInfoForecast"
          className="flex flex-col justify-around
           items-start leading-8 h-screen"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-semibold text-9xl translate-x-1">Paris</h1>

            <h2 className="font-light text-lg">{weatherData.daily.time[0]}</h2>
          </div>
        </div>

        <div
          id="secondForecastContainer"
          className=" h-screen w-full flex flex-col justify-around items-center"
        >
          <div className="flex justify-between gap-2">
            <img src={sunrise} alt="" className="h-6 w-6 "></img>
            <p className=" "> {weatherData.daily.sunrise[0]}</p>
          </div>
          <div className="flex justify-between gap-2">
            <img src={sunset} alt="" className="h-6 w-6 "></img>
            <p>{weatherData.daily.sunset[0]}</p>
          </div>
          <div className="flex justify-between gap-2">
            <img src={raining} alt="" className="h-6 w-6 "></img>
            <h3 className="font-light text-lg">{weatherData.hourly.rain[0]}</h3>
          </div>
          <div className="flex justify-between gap-2">
            <img src={wind} alt="" className="h-6 w-6 "></img>
            <p className="font-light text-lg">
              {weatherData.daily.windspeed_10m_max[0]}
              {weatherData.daily_units.windspeed_10m_max}
            </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <img src={temperature} alt="" className="h-6 w-6 "></img>
            <span className="font-light text-lg">
              Min : {weatherData.daily.temperature_2m_min[0]}
              {weatherData.daily_units.temperature_2m_min}| Max :{" "}
              {weatherData.daily.temperature_2m_max[0]}
              {weatherData.daily_units.temperature_2m_max}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMeteo;
