import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Home.css';
import CardProduto from "../../components/card/CardProduto";
import Carrosel from "../../components/carrosel/Carrosel";

function Home() {
  return (
    <>
      <Grid container spacing={3} columns={12} className="home-container">
        <Carrosel />
        <Grid item xs={12} className="title-container">
          <hr></hr>
          <Typography variant="h5" component="h1" className="title-produtos" >
                Quero levar para casa
          </Typography>
          <hr></hr>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} > <CardProduto /> </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
