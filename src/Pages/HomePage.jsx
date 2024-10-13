import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import TodayProduct from "../Components/TodayProduct";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TodayProduct />
    </div>
  );
};

export default HomePage;
