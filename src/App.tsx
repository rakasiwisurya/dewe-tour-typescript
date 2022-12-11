import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailTour, Home, NotFound } from "@/pages";
import { theme } from "./data";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "@/styles/globals.css";

function App() {
  useEffect(() => {
    document.title = "Dewe Tour";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/trip/:id" element={<DetailTour />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
