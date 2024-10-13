import HeroCategory from "./HeroCategory";
import HeroSwipper from "./HeroSwipper";

const Hero = () => {
  return (
    <div className="flex justify-around items-center mx-auto gap-7 max-w-screen-lg w-full">
      <div className=" border-r p-8 w-1/4">
        <HeroCategory />
      </div>
      <div className=" flex justify-end w-3/4 pt-2">
        <HeroSwipper />
      </div>
    </div>
  );
};

export default Hero;
