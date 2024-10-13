import English from "../assets/english.svg";
const TopHeader = () => {
  return (
    <div className=" w-full">
      <div className=" flex bg-button justify-around  text-text p-2 font-thin text-sm">
        <div className=""></div>
        <div className="">
          Summer Sale For All Swim Suits and Free Express Delivery -- OFF 50%{" "}
          <span className="font-medium underline">Shop Now</span>
        </div>
        <div className=" flex gap-2">
          {" "}
          English <img src={English} alt="" className=" h-5 w-5" />{" "}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
