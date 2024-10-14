import AllProduct from "../Components/AllProduct";
import BestSelling from "../Components/BestSelling";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import MobileNavBar from "../Components/MobileNavBar";
import NavBar from "../Components/NavBar";
import NewArival from "../Components/NewArival";
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
        <hr className=" border-t border-text1/30 w-5/6" />
      </div>
      <BestSelling />
      <div className=" w-full flex justify-center md:h-96 h-48 p-2">
        <img src={Categories} alt="" className=" md:w-5/6 w-full" />
      </div>
      <AllProduct />
      <NewArival />
      <Footer />
    </div>
  );
};

export default HomePage;
