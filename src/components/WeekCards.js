import React from "react";
import GetMeteoWeek from "./GetMeteoWeek";

const WeekCards = () => {
  return (
    <div className="w-screen ">
      <div
        id="weeklyContainer"
        className="h-screen grid grid-cols-2 grid-rows-3 p-6 bg-gray-500 gap-4 "
      >
        <GetMeteoWeek />
      </div>
    </div>
  );
};

export default WeekCards;
