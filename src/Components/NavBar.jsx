import { CiHeart, CiLogout, CiStar, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
import { PiShoppingBagThin, PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
import { LiaTimesCircle, LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
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
          <CiHeart className=" h-6 w-6 hover:text-secondary2 cursor-pointer" />
          <PiShoppingCartThin className=" h-6 w-6 hover:text-secondary2 cursor-pointer" />
          <button
            className=" hover:text-secondary2"
            onClick={() => setOpenUserMenu(!openUserMenu)}
          >
            <CiUser className=" h-6 w-6" />
          </button>
        </div>
      </div>
      {openUserMenu && (
        <UserDropDown closeMenu={() => setOpenUserMenu(false)} />
      )}
    </div>
  );
};

export default NavBar;

function UserDropDown({ closeMenu }) {
  return (
    <div className="fixed inset-0 z-50 flex  justify-end  pt-20 pr-28">
      <div className=" relative bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  w-1/5 max-w-md rounded-lg p-6 shadow-lg max-h-[40%] overflow-y-auto items-start gap-2 flex flex-col justify-center text-left">
        <button
          className="absolute top-4 right-4 pb-2 text-xl"
          onClick={closeMenu}
        >
          <LiaTimesSolid className="h-6 w-6" />
        </button>
        <div className=" flex mt-4 gap-3">
          <CiUser className=" h-6 w-6" />
          <span>Manage My Account</span>
        </div>
        <div className=" flex gap-3">
          <PiShoppingBagThin className=" h-6 w-6" />
          <span>My Order</span>
        </div>
        <div className=" flex gap-3">
          <LiaTimesCircle className=" h-6 w-6" />
          <span>My Cancellations</span>
        </div>
        <div className=" flex gap-3">
          <CiStar className=" h-6 w-6" />
          <span>My Reviews</span>
        </div>
        <div className=" flex gap-3">
          <CiLogout className=" h-6 w-6" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
