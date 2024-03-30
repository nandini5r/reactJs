import React from "react";
import { Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Gallery.scss";
import car1 from "../../utils/image 2.png";
import car3 from "../../utils/image 3.jpeg";
import car2 from "../../utils/laptop-which-there-is-world-people-drawn.jpg";
const Gallery = () => {
  return (
    <Carousel className="car-main">
      <Paper className="paper">
        <Typography>
          <img src={car1} alt="car1"></img>
        </Typography>
      </Paper>
      <Paper className="paper">
        <Typography>
          <img src={car3} alt="car2"></img>
        </Typography>
      </Paper>
      <Paper className="paper">
        <Typography>
          <img src={car2} alt="car3"></img>
        </Typography>
      </Paper>
    </Carousel>
  );
};

export default Gallery;
