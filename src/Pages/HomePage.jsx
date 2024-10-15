import AllProduct from "../Components/AllProduct";
import BestSelling from "../Components/BestSelling";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NewArival from "../Components/NewArival";
import TodayProduct from "../Components/TodayProduct";
import Cart from "../Components/Cart";
//import Categories from "../Components/Categories";
import Categoriesimg from "../assets/cartegory.png";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TodayProduct />
      <div className=" flex justify-center">
        <hr className=" border-t border-text1/30 w-5/6" />
      </div>
      <BestSelling />
      <div className=" w-full flex justify-center md:h-96 h-48 p-2">
        <img src={Categoriesimg} alt="" className=" md:w-5/6 w-full" />
      </div>

      <AllProduct />
      <NewArival />
      <Feature />
      <Footer />
      <Cart />
    </div>
  );
};

export default HomePage;
