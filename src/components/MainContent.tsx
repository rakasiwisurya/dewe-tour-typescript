import { Box, Container } from "@mui/material";
import { Hibiscus, Palm } from "@/assets";
import { GroupTour, Service } from "@/components";
import { theme } from "@/data";

const MainContent = () => {
  return (
    <Box
      component="section"
      sx={{ position: "relative", bgcolor: theme.palette.grey[300], pb: 17 }}
    >
      <Box
        component="img"
        src={Hibiscus}
        alt="Hibiscus"
        sx={{ position: "absolute", top: -80, right: 0 }}
      />
      <Box component="img" src={Palm} alt="Palm" sx={{ position: "absolute", top: 290, left: 0 }} />

      <Container sx={{ position: "relative" }}>
        <Service />
        <GroupTour />
      </Container>
    </Box>
  );
};

export default MainContent;
