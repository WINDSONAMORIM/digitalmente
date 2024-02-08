import React from "react";
import { AppBarDefault } from "../../components/menu";
import { CardDefault } from "../../components/card";
import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import { BarraPesquisa } from "../../components/barraPesquisa";
import { CardPlano } from "../../components/cardPlano";
import {
  cloudDiamante,
  cloudIniciante,
  cloudOuro,
  cloudPrata,
} from "../../data/planos";
import { CardService } from "../../components/cardService";

export const Home = () => {
  return (
    <>
      <CssBaseline />
      <AppBarDefault />
      <CardDefault />
      <BarraPesquisa />
      <Grid container justifyContent="space-evenly" spacing={2}>
        <CardPlano
          title="Cloud Iniciante"
          subtitle="Iniciante"
          price="169,00"
          services={cloudIniciante.map((service) => (
            <Typography textAlign="center" key={service}>
              {service}
            </Typography>
          ))}
        />
        <CardPlano
          title="Cloud Prata"
          subtitle="recomendado para lojas"
          price="289,00"
          services={cloudPrata.map((service) => (
            <Typography textAlign="center" key={service}>
              {service}
            </Typography>
          ))}
        />
        <CardPlano
          title="Cloud Ouro"
          subtitle="Lojas, LMSs/ EADs"
          price="389,00"
          services={cloudOuro.map((service) => (
            <Typography textAlign="center" key={service}>
              {service}
            </Typography>
          ))}
        />
        <CardPlano
          title="Diamante"
          subtitle="Medio Porte"
          price="879,00"
          services={cloudDiamante.map((service) => (
            <Typography textAlign="center" key={service}>
              {service}
            </Typography>
          ))}
        />
      </Grid>
      <Box
        mt={3}
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        height="150px"
      ></Box>
      <Box m={5} textAlign={"center"}>
        <Typography variant="h4" color={"#aedce8"}>
          Nossos Serviços
        </Typography>
      </Box>
      <Grid container justifyContent="space-evenly" spacing={2}>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        {/* <div
          style={{
            width: "145px",
            height: "145px",
            backgroundColor: "#0b0f88",
          }}
        ></div>
        <div
          style={{
            width: "145px",
            height: "145px",
            backgroundColor: "#0b0f88",
          }}
        ></div>
        <div
          style={{
            width: "145px",
            height: "145px",
            backgroundColor: "#0b0f88",
          }}
        ></div>
        <div
          style={{
            width: "145px",
            height: "145px",
            backgroundColor: "#0b0f88",
          }}
        ></div>
        <div
          style={{
            width: "145px",
            height: "145px",
            backgroundColor: "#0b0f88",
          }}
        ></div> */}
      </Grid>
    </>
  );
};
