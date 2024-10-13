import { MdKeyboardArrowRight } from "react-icons/md";

const HeroCategory = () => {
  return (
    <div className=" flex overflow-auto w-full">
      <ul className=" flex md:flex-col flex-row gap-1 whitespace-nowrap">
        <li className=" flex p-1 gap-3 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 bg-gray-100 md:bg-white rounded-lg transition-all duration-300">
          Women&apos;s Fashion{" "}
          <MdKeyboardArrowRight className=" mt-0.5 text-xl hidden md:flex" />
        </li>
        <li className=" flex p-1 gap-2 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Men&apos;s Fashion{" "}
          <MdKeyboardArrowRight className=" mt-0.5 text-xl hidden md:flex" />
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Electronics
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Home & LifeStyle
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Medicine
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Sports & Outdoors
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Baby&apos;s & Toys
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Groceries & Pets
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300  bg-gray-100 md:bg-white">
          Health & Beauty
        </li>
      </ul>
    </div>
  );
};

export default HeroCategory;
