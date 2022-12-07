import { createTheme } from "@mui/material";
import { amber } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: amber[600],
      main: "#ffaf00",
      dark: amber[800],
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
