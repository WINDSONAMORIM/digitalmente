import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ImageCard from '../../assets/imagens/Design-1024x768.png';

export const CardDefault = () => {
  return (
    <Card sx={{ maxWidth: "100%", m:1 }}>
      <CardActionArea sx={{ display: "flex", flexDirection: {xs: "column-reverse", md: "row-reverse"} }}>
        <CardMedia
        height={500}
          component="img"
        //   height="140"
          image={ImageCard}
          alt="imagem do banner"
          sx={{m:1}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Eleve o Seu negócio para o próximo Nível
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Com a Hostdm - Hospedagem de sites, o seu negócio sobe de nível. Entre agora mesmo em contato, e seja visto por todo o mundo.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Contratar
        </Button>
      </CardActions>
    </Card>
  );
}
