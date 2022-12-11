import { Background, Footer, GroupTour, Header, Hero, Service } from "@/components";
import { useHome } from "@/hooks";

const Home = () => {
  const {} = useHome();

  return (
    <>
      <Header />
      <Background showPlant sx={{ pb: 17 }}>
        <Hero />
        <Service />
        <GroupTour />
      </Background>
      <Footer />
    </>
  );
};

export default Home;
