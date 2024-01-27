import React from "react";
import { AppBarDefault } from "../../components/menu";
import { CardDefault } from "../../components/card";
import { CssBaseline, Grid } from "@mui/material";
import { BarraPesquisa } from "../../components/barraPesquisa";
import { CardPlano } from "../../components/cardPlano";


export const Home = () => {
  return (
    <>
      <CssBaseline />
      <AppBarDefault />
      <CardDefault />
      <BarraPesquisa />
      <Grid container justifyContent="center" spacing={2}>
        <CardPlano
          title="Cloud Iniciante"
          subtitle="Iniciante"
          price="169,00"
        />
        <CardPlano
          title="Cloud Prata"
          subtitle="recomendado para lojas"
          price="289,00"
        />
        <CardPlano
          title="Cloud Ouro"
          subtitle="Lojas, LMSs/ EADs"
          price="389,00"
        />
        <CardPlano
          title="Diamante"
          subtitle="Medio Porte"
          price="879,00"
        />
      </Grid>
    </>
  );
};
