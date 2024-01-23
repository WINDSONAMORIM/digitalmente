import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputAdornment, TextField} from '@mui/material'
import BackgroundShared from '../../assets/imagens/Barra_pesquisa-300x150.jpg'

export const BarraPesquisa = () => {
    

    return (
      <>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          height={"150px"}
          sx={{
            backgroundImage: `url(${BackgroundShared})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <TextField
            placeholder="Pesquisar Dominio"
            variant="standard"
            sx={{
              width: "80%",
              backgroundColor: "#ffffff",
              borderRadius: "30px",
              padding: "5px 20px",
            }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="medium"
                    sx={{
                      borderRadius: "0px 30px 30px 0px",
                      marginRight: "-20px",
                      backgroundColor: "#A9DAE7",
                }}
                  >
                    <SearchIcon sx={{ margin: "1px", color: "#ffffff" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </>
    );
}