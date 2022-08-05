import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="footer"
      >
        <Grid className="footer-box">
          <Box className="contatos-box">
            <Typography variant="h6" className="footer-title">
              Contatos
            </Typography>
            <Typography variant="body1" className="footer-text">
              <EmailIcon className="footer-icon" /> contato@sebomaresia.com.br
            </Typography>
            <Typography variant="body1" className="footer-text">
              <PhoneIcon className="footer-icon" /> (11) 94002-8922
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className="footer-subtext"
            >
              (Ligue ou mande uma mensagem pelo Whatsapp)
            </Typography>
          </Box>
          <Box className="pagamentos-envios-box">
            <Box className="pagamentos-box">
              <Typography variant="h6" className="footer-title">
                Formas de Pagamento
              </Typography>
              <Typography variant="body1" className="footer-text">
                Parcelamentos em até 12x nos cartões de crédito
              </Typography>
            </Box>
            <Box className="envios-box">
              <Typography variant="h6" className="footer-title">
                Politicas de entrega
              </Typography>
              <Typography variant="body1" className="footer-text">
                <LocalShippingIcon className="footer-icon" /> Formas de envio
              </Typography>
              <Typography variant="body1" className="footer-text">
                <ExitToAppIcon className="footer-icon" /> Devolução
              </Typography>
            </Box>
          </Box>
          <Box className="assine-sociais-box">
            <Box className="assine-box">
              <Typography variant="h6" className="footer-title">
                Receba nossas notícias
              </Typography>
              <Typography variant="body1" className="footer-text">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <Button variant="contained" className="botao-assinar">
                  <ArrowForwardIcon />
                </Button>
              </Typography>
            </Box>
            <Box className="redes-box">
              <Typography variant="h6" className="footer-title">
                Siga-nos nas redes sociais
              </Typography>
              <Box className="redes-icones-box">

                  <InstagramIcon className="footer-icon redes-icon" />


                  <FacebookIcon className="footer-icon redes-icon" />


                  <LinkedInIcon className="footer-icon redes-icon" />

                </Box>
            </Box>
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={12}>
          <Box className="footer-copy">
            <Typography variant="subtitle2" className="cop" align="center">
              © Copyright 2022. Sebo Maresia: Todos os direitos reservados.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;