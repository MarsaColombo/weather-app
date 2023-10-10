import React from "react";
import GetMeteoWeek from "./GetMeteoWeek";

const WeekCards = () => {
  return (
    <div className="w-full border-2 border-black">
      <div
        id="weeklyContainer"
        className="flex justify-around items-center content-center p-6 "
      >
        <GetMeteoWeek />
      </div>
    </div>
  );
};

export default WeekCards;
