"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [{ label: "Monty Python and the Holy Grail", year: 1975 }];
const Input = () => {
  return (
    <div className=" w-full flex justify-around items-center p-6">
      <Autocomplete
        clearOnEscape
        options={top100Films}
        sx={{}}
        className="  w-2/6  "
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <h1 className="font-bold text-2xl">Weather Forecast</h1>
    </div>
  );
};

export default Input;
