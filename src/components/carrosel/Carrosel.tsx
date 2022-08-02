import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Grid from '@mui/material/Grid';
import './Carrosel.css';

function Carrosel() {
  const imageOne =
    "https://tse3.mm.bing.net/th?id=OIP.soBeIxBABXB36LBetjMHiwHaCX&pid=Api&P=0";
  const imageTwo =
    "https://tse1.mm.bing.net/th?id=OIP.ewG34-zuE9pnPMUxFNkyygHaCb&pid=Api&P=0";
  const imageThree =
    "https://thumbs.dreamstime.com/b/book-shelf-banner-23911530.jpg";

  return (
    <>
      <Grid className="carrosel-container" >
        <Carousel className="carrosel" plugins={["arrows"]}>
          <img className="image" src={imageOne} />
          <img className="image" src={imageTwo} />
          <img className="image" src={imageThree} />
        </Carousel>
      </Grid>
    </>
  );
}

export default Carrosel;
