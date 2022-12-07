import { useEffect } from "react";
import { Footer, Header, Hero, MainContent } from "../components";
import { useAppDispatch } from "../hooks";
import { getGroupTours, resetGroupTours } from "../redux";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetGroupTours());
    dispatch(getGroupTours());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </main>
  );
};

export default Home;
