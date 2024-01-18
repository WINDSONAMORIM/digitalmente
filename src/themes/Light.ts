import { createTheme, CssBaseline } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#560BAD",
      dark: "#3c0779",
      light: "#773bbd",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});
