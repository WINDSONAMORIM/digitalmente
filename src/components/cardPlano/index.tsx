import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

interface CardPlanoProps{
  title: string,
  subtitle: string,
  price:string,

}

export const CardPlano = ({title, subtitle, price}: CardPlanoProps) => {
    return (
        <Grid item xs={12} sm={3}>
          <Box
            borderRadius="90px 0 90px 0"
            margin={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxShadow:
                "19px 20px 15px -3px rgba(0,0,0,0.1),-20px -15px 15px -3px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                p: "5px 5px 0px 5px",
                bgcolor: " #A9DAE7",
                borderRadius: "20px 50px 5px 5px",
                mb: 2,
              }}
            >
              <CloudQueueIcon fontSize="large" sx={{ color: "#ffffff" }} />
            </Box>
            <Typography
              fontWeight="bold"
              variant="h4"
            >
              {title}              
            </Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
            <Box
              sx={{
                backgroundColor: "#4f13a5",
                padding: "10px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 2,
                marginTop: "30px",
              }}
            >
              <Typography fontWeight="bold" fontSize="18px" color={"#ffffff"}>
                R${" "}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                fontSize="48px"
                color={"#ffffff"}
              >               
               {price}
              </Typography>
              <Typography fontWeight="bold" fontSize="18px" color={"#ffffff"}>
                /Mês
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "20px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography>1 Gg </Typography>
              <Typography>1 CPU </Typography>
              <Typography>1 Gg Ram </Typography>
              <Typography>25 Gg SSD</Typography>
              <Typography>1 Domínio </Typography>
              <Typography>5 Contas de E-mail </Typography>
              <Typography>Banco de Dados ilimitado </Typography>
              <Typography>100.000 Visualizações por mês </Typography>
              <Typography>Site WordPress </Typography>
              <Typography>Construtor Elementor </Typography>
              <Typography>Gerenciador de Conteúdos </Typography>
              <Typography>Atualização constante</Typography>
            </Box>
          </Box>
        </Grid>
    );
}