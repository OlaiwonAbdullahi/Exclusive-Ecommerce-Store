import HeroCategory from "./HeroCategory";
import HeroSwipper from "./HeroSwipper";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center mx-auto md:gap-7 gap-2  max-w-screen-lg w-full">
      <div className=" border-r md:p-8 p-1 md:w-1/4 w-full">
        <HeroCategory />
      </div>
      <div className=" flex justify-end md:w-3/4 w-full p-2 ">
        <HeroSwipper />
      </div>
    </div>
  );
};

export default Hero;
