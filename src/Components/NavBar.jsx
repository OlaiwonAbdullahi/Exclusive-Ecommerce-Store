import { CiHeart, CiLogout, CiStar, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
import { PiShoppingBagThin, PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
import { LiaTimesCircle, LiaTimesSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const location = useLocation(); // To get the current URL path

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Contact", to: "/contact" },
    { label: "About", to: "/about" },
    { label: "Sign Up", to: "/signup" },
    { label: "Shop", to: "/shop" },
  ];
  return (
    <div className=" md:flex flex-col hidden w-full sticky top-0 bg-white z-20">
      <TopHeader />
      <div className=" flex justify-around p-3 items-center border-b border-b-text1/20">
        <div className=" font-semibold text-button text-2xl">
          Exclusive Store
        </div>
        <div className=" ">
          <ul className="flex gap-9 font-light">
            {menuItems.map((item) => (
              <Link key={item.label} to={item.to}>
                <li
                  className={`${
                    location.pathname === item.to
                      ? "text-text2 border-b-2  border-b-text1"
                      : " hover:text-secondary2"
                  }`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className=" flex gap-5 items-center">
          <SearchBar />
          <CiHeart className=" h-6 w-6 hover:text-secondary2 cursor-pointer" />
          <Link to="/cart">
            <PiShoppingCartThin className=" h-6 w-6 hover:text-secondary2 cursor-pointer" />
          </Link>
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
      <div className=" relative bg-gray-400 text-text bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  w-1/5 max-w-md rounded-lg p-6 shadow-lg max-h-[40%] overflow-y-auto items-start gap-2 flex flex-col justify-center text-left">
        <button
          className="absolute top-4 right-4 pb-2 text-xl"
          onClick={closeMenu}
        >
          <LiaTimesSolid className="h-6 w-6" />
        </button>
        <Link to="/account">
          <div className=" flex mt-4 gap-3">
            <CiUser className=" h-6 w-6" />
            <span>Manage My Account</span>
          </div>
        </Link>
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
