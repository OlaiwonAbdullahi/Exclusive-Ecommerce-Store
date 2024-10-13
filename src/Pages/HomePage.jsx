import BestSelling from "../Components/BestSelling";
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
      <div className=" flex justify-center">
        <hr className=" border-t border-text1 w-5/6" />
      </div>
      <BestSelling />
    </div>
  );
};

export default HomePage;
