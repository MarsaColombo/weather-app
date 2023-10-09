import React from "react";
import sunLogo from "./soleil.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Content = () => {
  return (
    <div>
      {/* Carte Principale */}
      <div className="h-auto w-auto m-8 flex justify-center items-center ">
        <Card className="h-1/6 w-2/6">
          <CardMedia
            component="img"
            alt="Logo Soleil"
            className="h-[6rem] w-auto"
            image={sunLogo}
          />
          <CardContent className=" flex flex-col justify-center items-center">
            <Typography variant="h6" component="div">
              Berlin
            </Typography>
            <Typography>30&#xB0;</Typography>
          </CardContent>
        </Card>
      </div>
      {/* carte content */}
      
    </div>
  );
};

export default Content;
