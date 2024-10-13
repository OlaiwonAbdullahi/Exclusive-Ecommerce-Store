import { CiHeart, CiMenuFries, CiUser } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import TopHeader from "./TopHeader";
import { PiShoppingCartThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import SearchBar from "./SearchBar";

const MobileNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className=" flex flex-col md:hidden w-full ">
      <TopHeader />
      <div className=" flex justify-between px-7 p-3 items-center border-b border-b-text1/20">
        <div className=" font-semibold text-button text-2xl">
          Exclusive Store
        </div>
        <div className=" flex gap-3">
          <button onClick={() => setOpenSearch(!openSearch)}>
            {!openSearch ? (
              <GoSearch className=" h-6 w-6" />
            ) : (
              <LiaTimesSolid className=" h-6 w-6" />
            )}
          </button>

          <CiHeart className=" h-6 w-6" />
          <PiShoppingCartThin className=" h-6 w-6" />
          <CiUser className=" h-6 w-6" />
          <button onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? (
              <CiMenuFries className=" h-6 w-6" />
            ) : (
              <LiaTimesSolid className=" h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className=" flex justify-center">{openSearch && <SearchBar />}</div>
      {openMenu && <Nav />}
    </div>
  );
};

export default MobileNavBar;

function Nav() {
  return (
    <div className=" flex z-10 w-1/3 bg-white rounded-lg mt-2 shadow-sm items-center justify-center mx-auto ">
      <div className=" ">
        <ul className="flex flex-col gap-2 font-light">
          <li className="">Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className=" flex gap-5 items-center"></div>
    </div>
  );
}
