import React from "react";
import { Grid, Box, Button, Typography, } from "@mui/material";
import "./SobreNos.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from  "@mui/icons-material/Facebook";
import LinkedInIcon from  "@mui/icons-material/LinkedIn";

function SobreNos() {
  return (
    <>
      <Grid container spacing={3} columns={12} className="sobrenos-container">
        <Grid item xs={12} className="title-container">
          <hr></hr>
          <Typography variant="h4" component="h1" className="title-sobrenos">
            Sobre nós
          </Typography>
          <hr></hr>
        </Grid>
        <Box className="card-fulano">
          <img
            src="https://scontent.fcgh11-1.fna.fbcdn.net/v/t1.6435-9/192126077_103966758563635_628579835013648822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C1xbA8qG53kAX9pHkNI&_nc_ht=scontent.fcgh11-1.fna&oh=00_AT-YgmouOfPkz-qGgOhT-LIxVnwElXi_7rhbCwW7qprqRg&oe=63107F59"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Valores
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >
                Mussum Ipsum, cacilds vidis litro abertis. Per aumento de
                cachacis, eu reclamis.Si u mundo tá muito paradis? Toma um mé
                que o mundo vai girarzis!Paisis, filhis, espiritis santis.Tá
                deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              </Typography>
              <Box className="redessociais">
                <InstagramIcon className="footer-icon redes-icon" />
                <FacebookIcon className="footer-icon redes-icon" />
                <LinkedInIcon className="footer-icon redes-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="card-fulano2">
          <img
            src="https://scontent.fcgh11-1.fna.fbcdn.net/v/t39.30808-6/286807225_379084340867994_8470167130508990051_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M5pQcTB5oZMAX-eEpzd&_nc_ht=scontent.fcgh11-1.fna&oh=00_AT8biEOwUeipuVHMIfwsO9EUf37CkbJm_0_9gl9wbIugiA&oe=62EFA85A"
            alt="avatar"
            className="avatar"
          />
          <Box className="card-fulano-text">
            <Button variant="text" className="botao-nav">
              Missão
            </Button>
            <Box className="parte-texto-icones">
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-sobrenos"
              >
                Mussum Ipsum, cacilds vidis litro abertis. Per aumento de
                cachacis, eu reclamis.Si u mundo tá muito paradis? Toma um mé
                que o mundo vai girarzis!Paisis, filhis, espiritis santis.Tá
                deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
              </Typography>
              <Box className="redessociais">
                <InstagramIcon className="footer-icon redes-icon" />
                <FacebookIcon className="footer-icon redes-icon" />
                <LinkedInIcon className="footer-icon redes-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default SobreNos;