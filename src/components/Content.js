import React from "react";
import snowy from "./ui/SnowyBG.jpeg";

import GetMeteo from "./GetMeteo";

const Content = () => {
  return (
    <div className="bg-gray-500">
      <div
        className="h-screen w-full rounded-b-full bg-gray-500"
        style={{
          backgroundImage: `url(${snowy})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Carte Principale */}
        <GetMeteo className=" " />
        {/* carte content */}
      </div>
    </div>
  );
};

export default Content;
