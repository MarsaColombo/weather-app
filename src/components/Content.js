import React from "react";
import nuage from "./ui/Nuageux.jpg";
import Input from "./Input";
import GetMeteo from "./GetMeteo";

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
      <GetMeteo />
      {/* carte content */}
    </div>
  );
};

export default Content;
