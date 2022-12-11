import { Box } from "@mui/material";
import { Footer, Header, Hero, MainContent } from "@/components";
import { useHome } from "@/hooks";

const Home = () => {
  const {} = useHome();

  return (
    <Box component="main">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default Home;
