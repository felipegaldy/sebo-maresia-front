import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import './CardProduto.css';

function CardProduto() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.impresa.pt/averdade/2021-06-01-M.-G.-Ferrey-apresenta-novo-livro-na-Escola-Secundaria-de-Felgueiras--3-.jpg-80ce0edc/original"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Produto
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra
            nisi. Mauris aliquet nunc non turpis scelerisque, eget.Detraxit
            consequat et quo num tendi nada.Manduma pindureta quium dia nois
            paga.Si u mundo tá muito paradis? Toma um mé que o mundo vai
            girarzis!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions" >
        <Button size="small" color="primary">
          Comprar
        </Button>
        <Typography variant="body2" color="text.secondary">
            R$ 100,00
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardProduto;
