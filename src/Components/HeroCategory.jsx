import { MdKeyboardArrowRight } from "react-icons/md";

const HeroCategory = () => {
  return (
    <div>
      <ul className=" flex flex-col gap-1 whitespace-nowrap">
        <li className=" flex p-1 gap-3 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Women&apos;s Fashion{" "}
          <MdKeyboardArrowRight className=" mt-0.5 text-xl" />
        </li>
        <li className=" flex p-1 gap-2 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Men&apos;s Fashion{" "}
          <MdKeyboardArrowRight className=" mt-0.5 text-xl" />
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Electronics
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Home & LifeStyle
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Medicine
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Sports & Outdoors
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Baby&apos;s & Toys
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Groceries & Pets
        </li>
        <li className=" flex p-1 items-center text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300">
          Health & Beauty
        </li>
      </ul>
    </div>
  );
};

export default HeroCategory;
