import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "./Button";

const HeroCategory = () => {
  return (
    <div className="flex overflow-x-auto w-full scrollbar-hide">
      <ul className="flex md:flex-col flex-row gap-1 whitespace-nowrap">
        <li className="flex p-1 gap-3 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 bg-gray-100 md:bg-white rounded-lg transition-all duration-300">
          Beauty
          <MdKeyboardArrowRight className="mt-0.5 text-xl hidden md:flex" />
        </li>
        <li className="flex p-1 gap-2 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          Fragrances
          <MdKeyboardArrowRight className="mt-0.5 text-xl hidden md:flex" />
        </li>
        <li className="flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          Laptops
        </li>
        <li className="flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          SmartPhones
        </li>
        <li className="flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          Tablets
        </li>
        <li className="flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          Furniture
        </li>
        <li className="flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          Groceries
        </li>
        <li className="flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          Home-Decoration
        </li>
        <li className="flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 bg-gray-100 md:bg-white">
          Vehicles
        </li>
        <Button width={150}>View All Categories</Button>
      </ul>
    </div>
  );
};

export default HeroCategory;
