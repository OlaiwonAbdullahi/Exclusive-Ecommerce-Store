import BestSelling from "../Components/BestSelling";
import Hero from "../Components/Hero";
import MobileNavBar from "../Components/MobileNavBar";
import NavBar from "../Components/NavBar";
import TodayProduct from "../Components/TodayProduct";
import Categories from "../assets/cartegory.png";

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
      <div className=" w-full flex justify-center md:h-96 h-48">
        <img src={Categories} alt="" className=" md:w-5/6 w-full" />
      </div>
    </div>
  );
};

export default HomePage;
