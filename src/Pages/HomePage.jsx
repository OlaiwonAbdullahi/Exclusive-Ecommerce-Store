import Hero from "../Components/Hero";
import MobileNavBar from "../Components/MobileNavBar";
import NavBar from "../Components/NavBar";
import TodayProduct from "../Components/TodayProduct";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <MobileNavBar />
      <Hero />
      <TodayProduct />
      <hr className=" border border-text1" />
    </div>
  );
};

export default HomePage;
