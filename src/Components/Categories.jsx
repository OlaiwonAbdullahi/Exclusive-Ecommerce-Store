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
const Categories = () => {
  return (
    <div className="p-2 flex flex-col gap-8 mt-2">
      <div className="flex gap-5 w-full overflow-auto overflow-x-auto  scrollbar-hide">
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <BsBrush className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Beauty</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <TbPerfume className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Fragrances</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <IoIosLaptop className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Laptops</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <IoPhonePortraitOutline className=" h-8 w-8" />
          <span className=" text-sm font-semibold">SmartPhones</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <IoTabletLandscapeOutline className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Tablets</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <MdOutlineChair className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Furniture</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <IoPhonePortraitOutline className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Groceries</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <IoPhonePortraitOutline className=" h-8 w-8" />
          <span className=" text-sm font-semibold whitespace-nowrap">
            Home Decoration
          </span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <IoCarSport className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Vehicles</span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <PiTShirtThin className=" h-8 w-8" />
          <span className=" text-sm font-semibold whitespace-nowrap">
            Mens Shirts
          </span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <LiaShoePrintsSolid className=" h-8 w-8" />
          <span className=" text-sm font-semibold whitespace-nowrap">
            Mens shoes
          </span>
        </div>
        <div className=" hover:bg-secondary2 hover:text-secondary hover:border-text border p-3 items-center  h-16 flex flex-col border-text2 rounded">
          <PiTShirtThin className=" h-8 w-8" />
          <span className=" text-sm font-semibold">Tops</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
