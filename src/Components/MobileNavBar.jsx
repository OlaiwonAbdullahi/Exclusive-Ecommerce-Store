import { useState } from "react";
import { CiHeart, CiLogout, CiMenuFries, CiStar, CiUser } from "react-icons/ci";
import { LiaTimesCircle, LiaTimesSolid } from "react-icons/lia";
import TopHeader from "./TopHeader";
import { PiShoppingBagThin, PiShoppingCartThin } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import SearchBar from "./SearchBar";

const MobileNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <div className="sticky z-20 top-0 flex flex-col md:hidden w-full">
      <TopHeader />
      <div className=" bg-white  flex justify-between px-7 p-3 items-center border-b border-b-text1/20">
        <div className="font-semibold text-button text-xl whitespace-nowrap ">
          Exclusive Store
        </div>
        <div className="flex gap-3">
          <button onClick={() => setOpenSearch(!openSearch)}>
            {!openSearch ? (
              <GoSearch className="h-6 w-6" />
            ) : (
              <LiaTimesSolid className="h-6 w-6" />
            )}
          </button>

          <CiHeart className="h-6 w-6" />
          <PiShoppingCartThin className="h-6 w-6" />
          <button className="" onClick={() => setOpenUserMenu(!openUserMenu)}>
            <CiUser className="h-6 w-6" />
          </button>
          <button onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? (
              <CiMenuFries className="h-6 w-6" />
            ) : (
              <LiaTimesSolid className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-center">{openSearch && <SearchBar />}</div>
      {openMenu && <Nav closeMenu={() => setOpenMenu(false)} />}
      {openUserMenu && (
        <UserDropDown closeMenu={() => setOpenUserMenu(false)} />
      )}
    </div>
  );
};

export default MobileNavBar;

function Nav({ closeMenu }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50 pt-10">
      <div className="relative bg-white w-3/4 max-w-md rounded-lg p-6 shadow-lg max-h-[40%] overflow-y-auto items-center flex justify-center text-center">
        <button className="absolute top-4 right-4 text-xl" onClick={closeMenu}>
          <LiaTimesSolid className="h-6 w-6" />
        </button>
        <ul className="flex flex-col gap-4 text-lg font-light">
          <li className="hover:text-gray-500 cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
          <li className="hover:text-gray-500 cursor-pointer">About</li>
          <li className="hover:text-gray-500 cursor-pointer">Sign Up</li>
        </ul>
      </div>
    </div>
  );
}

function UserDropDown({ closeMenu }) {
  return (
    <div className="fixed inset-0 z-50 flex  justify-end  pt-20 pr-16">
      <div className=" relative bg-gray-400 text-text bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  w-3/4 max-w-md rounded-lg p-6 shadow-lg max-h-[50%] overflow-y-auto items-start gap-2 flex flex-col justify-center text-left">
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
