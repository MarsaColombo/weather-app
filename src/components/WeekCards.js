import React from "react";
import sun from "./ui/sun.png";
import wind from "./ui/wind.png";

const WeekCards = () => {
  return (
    <div className="w-full  border-2 border-black">
      <div
        id="weeklyContainer"
        className="flex justify-around items-center content-center p-6 "
      >
        {/* One day */}

        <div className="jour h-full  rounded-xl shadow-xl p-4 flex flex-col items-center justify-center">
          <h1>Lundi</h1>
          <p>01/12</p>
          <div className="flex justify-around items-center ">
            <img src={sun} alt="" className="h-6 w-6 "></img>
            <p>20&#xB0;</p>
          </div>

          <div className="flex justify-around items-center ">
            <img src={wind} alt="" className="h-6 w-6 "></img>
            <p>20&#xB0;</p>
          </div>
          <span> 20&#xB0; / 20&#xB0; </span>
        </div>

        
      </div>
    </div>
  );
};

export default WeekCards;
