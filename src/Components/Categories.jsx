import {
  IoCarSport,
  IoFastFoodOutline,
  IoPhonePortraitOutline,
  IoTabletLandscapeOutline,
} from "react-icons/io5";
import { BsBrush } from "react-icons/bs";
import { TbPerfume } from "react-icons/tb";
import { IoIosLaptop } from "react-icons/io";
import { MdOutlineChair } from "react-icons/md";
import { PiFlowerTulipThin, PiTShirtThin } from "react-icons/pi";
import { LiaShoePrintsSolid } from "react-icons/lia";
const Categories = ({ setCategories, categories }) => {
  const categoriesList = [
    { name: "beauty", icon: <BsBrush /> },
    { name: "fragrances", icon: <TbPerfume /> },
    { name: "laptops", icon: <IoIosLaptop /> },
    { name: "smartphones", icon: <IoPhonePortraitOutline /> },
    { name: "tablets", icon: <IoTabletLandscapeOutline /> },
    { name: "furniture", icon: <MdOutlineChair /> },
    { name: "groceries", icon: <IoFastFoodOutline /> },
    { name: "home-decoration", icon: <PiFlowerTulipThin /> },
    { name: "vehicles", icon: <IoCarSport /> },
    { name: "mens-shirts", icon: <PiTShirtThin /> },
    { name: "mens-shoes", icon: <LiaShoePrintsSolid /> },
    { name: "tops", icon: <PiTShirtThin /> },
  ];

  return (
    <div className="p-2 flex flex-col  w-full justify-center gap-8 mt-2">
      <div className="flex gap-5 overflow-auto scrollbar-hide">
        {categoriesList.map((category) => (
          <button
            key={category.name}
            className={`p-3 items-center h-16 flex flex-col border-text2 rounded ${
              categories === category.name
                ? "bg-secondary2 text-secondary"
                : "hover:bg-secondary2 hover:text-secondary hover:border-text border"
            }`}
            onClick={() => setCategories(category.name)}
          >
            {category.icon}
            <span className="text-sm font-semibold">
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
