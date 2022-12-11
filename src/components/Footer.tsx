import { Box, Container, Typography } from "@mui/material";
import { Leaf } from "@/assets";
import { theme } from "@/data";

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
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 0, sm: 1 },
          }}
        >
          <Typography>Copyright @ 2022</Typography>
          <Typography>Dewe Tour - Rakasiwi Surya.</Typography>
          <Typography>All Rights reserved</Typography>
        </Box>
        <Box
          component="img"
          src={Leaf}
          alt="Leaf"
          sx={{ height: { xs: 50, sm: 110 }, position: "absolute", bottom: 0, right: 0 }}
        />
      </Container>
    </Box>
  );
};

export default Footer;
