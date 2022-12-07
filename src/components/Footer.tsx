import { Box, Typography } from "@mui/material";
import { Leaf } from "../assets";
import { theme } from "../data";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        textAlign: "center",
        color: theme.palette.text.secondary,
        py: 3,
        position: "relative",
      }}
    >
      <Typography>Copyright @ 2022 Dewe Tour - Rakasiwi Surya. All Rights reserved</Typography>
      <Box
        component="img"
        src={Leaf}
        alt="Leaf"
        height={130}
        sx={{ position: "absolute", bottom: 0, right: 0 }}
      />
    </Box>
  );
};

export default Footer;
