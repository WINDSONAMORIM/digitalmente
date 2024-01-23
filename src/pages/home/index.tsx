import React from "react";
import { AppBarDefault } from "../../components/menu";
import { CardDefault } from "../../components/card";
import { CssBaseline } from "@mui/material";
import { BarraPesquisa } from "../../components/barraPesquisa";


export const Home = () => {
  return (
    <>
      <CssBaseline />
      <AppBarDefault />
      <CardDefault />
      <BarraPesquisa />
    </>
  );
};
