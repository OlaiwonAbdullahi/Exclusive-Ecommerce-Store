import { CiHeart, CiMenuFries, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
import { PiShoppingCartThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";

const MobileNavBar = () => {
  return (
    <div className=" flex flex-col">
      <TopHeader />
      <div className=" flex justify-between p-3 items-center border-b border-b-text1/20">
        <div className=" font-semibold text-button text-2xl">
          Exclusive Store
        </div>
        <div className=" flex gap-3">
          <GoSearch />
          <CiMenuFries />
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default MobileNavBar;

function Nav() {
  return (
    <div className="">
      <div className=" ">
        <ul className="flex flex-col gap-2 font-light">
          <li className="">Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className=" flex gap-5 items-center">
        <SearchBar />
        <CiHeart className=" h-6 w-6" />
        <PiShoppingCartThin className=" h-6 w-6" />
        <CiUser className=" h-6 w-6" />
      </div>
    </div>
  );
}
