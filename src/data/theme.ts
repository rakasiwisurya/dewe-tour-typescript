import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: colors.amber[600],
      main: "#ffaf00",
      dark: colors.amber[800],
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#fff",
    },
    grey: {
      300: "#e5e5e5",
    },
    text: {
      secondary: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  // spacing: (factor: number) => `${0.25 * factor}rem`,
});
