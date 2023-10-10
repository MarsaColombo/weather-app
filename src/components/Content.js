import React from "react";
import nuage from "./ui/Nuageux.jpg";
import Input from "./Input";

const Content = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${nuage})`,
        backgroundSize: "cover", // Pour adapter l'image à la taille du conteneur
        backgroundRepeat: "no-repeat", // Pour éviter la répétition de l'image
        backgroundPosition: "center", // Pour centrer l'image horizontalement et verticalement
      }}
      className="mx-8 my-6 h-96"
    >
      <Input className="h-1/6" />
      {/* Carte Principale */}
      <div className=" h-4/6 flex justify-center items-center  fit-content">
        <div
          id="dayForecastContainer "
          className="h-full w-full flex justify-between items-center m-4 "
        >
          <div
            id="firstInfoForecast"
            className="flex flex-col justify-around items-start leading-8 h-full"
          >
            <h1 className="font-semibold text-2xl">Paris</h1>
            <h3 className="font-light text-lg">Soleil</h3>
            <h2 className="font-light text-lg">Samedi 23 Octobre 2021</h2>
          </div>
          <div
            id="secondForecastContainer"
            className=" h-full flex flex-col justify-around items-end"
          >
            <p className="font-light text-lg">20&#xB0;</p>
            <span className="font-light text-lg"> 18&#xB0; / 23&#xB0; </span>
          </div>
        </div>
      </div>
      {/* carte content */}
    </div>
  );
};

export default Content;
