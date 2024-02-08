import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const CardService = () => {
  return (
    <Grid item>
      <Box
        borderRadius="90px 0 90px 0"
        sx={{
          boxShadow:
            "19px 20px 15px -3px rgba(0,0,0,0.1),-20px -15px 15px -3px rgba(0,0,0,0.1)",
        }}
      >
        <Card
          sx={{
            width: "345px",
            borderRadius: "90px 0 90px 0",
            padding: 2,
          }}
        >
          <Typography textAlign="center" gutterBottom variant="h5">
            Criação de Sites
          </Typography>
          <Divider variant="middle">
            <StarIcon color="primary" />
          </Divider>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Desenvolvemos Sites Institucionais, Landing Pages totalmente
              ajustáveis para todo tipo de tela. Para tal, utilizamos as mais
              modernas e atualizadas tecnologias disponíveis no mercado
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saiba mais</Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};
