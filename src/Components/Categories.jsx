import {
  IoCarSport,
  IoPhonePortraitOutline,
  IoTabletLandscapeOutline,
} from "react-icons/io5";
import { BsBrush } from "react-icons/bs";
import { TbPerfume } from "react-icons/tb";
import { IoIosLaptop } from "react-icons/io";
import { MdOutlineChair } from "react-icons/md";
import { PiTShirtThin } from "react-icons/pi";
import { LiaShoePrintsSolid } from "react-icons/lia";
const Categories = ({ setCategories }) => {
  const categoryList = [
    { icon: <BsBrush />, label: "Beauty", value: "beauty" },
    { icon: <TbPerfume />, label: "Fragrances", value: "fragrances" },
    { icon: <IoIosLaptop />, label: "Laptops", value: "laptops" },
    {
      icon: <IoPhonePortraitOutline />,
      label: "SmartPhones",
      value: "smartphones",
    },
    { icon: <IoTabletLandscapeOutline />, label: "Tablets", value: "tablets" },
    { icon: <MdOutlineChair />, label: "Furniture", value: "furniture" },
    { icon: <IoCarSport />, label: "Vehicles", value: "vehicles" },
    { icon: <PiTShirtThin />, label: "Mens Shirts", value: "shirts" },
    { icon: <LiaShoePrintsSolid />, label: "Mens Shoes", value: "shoes" },
    { icon: <PiTShirtThin />, label: "Tops", value: "tops" },
  ];

  return (
    <div className="p-2 flex flex-col gap-8 mt-2">
      <div className="flex gap-5 w-full overflow-auto scrollbar-hide">
        {categoryList.map((category) => (
          <div
            key={category.value}
            className="hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center h-16 flex flex-col border-text2 rounded cursor-pointer"
            onClick={() => setCategories(category.value)} // Set the category on click
          >
            {category.icon}
            <span className="text-sm font-semibold">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
