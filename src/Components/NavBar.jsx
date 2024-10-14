import { CiHeart, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
import { PiShoppingCartThin } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className=" md:flex flex-col hidden w-full">
      <TopHeader />
      <div className=" flex justify-around p-3 items-center border-b border-b-text1/20">
        <div className=" font-semibold text-button text-2xl">
          Exclusive Store
        </div>
        <div className=" ">
          <ul className="flex gap-9 font-light">
            <li className="border-b border-b-text1/20">Home</li>
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
      <UserDropDown />
    </div>
  );
};

export default NavBar;

function UserDropDown() {
  return (
    <div className="fixed inset-0 z-50 flex  justify-center bg-black bg-opacity-50 pt-10">
      <div className=" relative bg-white w-1/2 max-w-md rounded-lg p-6 shadow-lg max-h-[40%] overflow-y-auto items-start flex flex-col justify-center text-left">
        <div className=" flex">
          <CiUser className=" h-6 w-6" />
          <span>Manage My Account</span>
        </div>
        <div className=" flex">
          <CiUser className=" h-6 w-6" />
          <span>My Order</span>
        </div>
        <div className=" flex">
          <CiUser className=" h-6 w-6" />
          <span>My Cancellations</span>
        </div>
        <div className=" flex">
          <CiUser className=" h-6 w-6" />
          <span>My Reviews</span>
        </div>
        <div className=" flex">
          <CiUser className=" h-6 w-6" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
