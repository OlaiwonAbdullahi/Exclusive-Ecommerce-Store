import { MdKeyboardArrowRight } from "react-icons/md";

const HeroCategory = () => {
  return (
    <div>
      <ul className=" flex flex-col gap-1 whitespace-nowrap">
        <li className=" flex p-1 gap-3">
          Women&apos;s Fashion{" "}
          <MdKeyboardArrowRight className=" mt-0.5 text-xl" />
        </li>
        <li className=" flex p-1 gap-2">
          Men&apos;s Fashion{" "}
          <MdKeyboardArrowRight className=" mt-0.5 text-xl" />
        </li>
        <li className=" flex p-1">Electronics</li>
        <li className=" flex p-1">Home & LifeStyle</li>
        <li className=" flex p-1">Medicine</li>
        <li className=" flex p-1">Sports & Outdoors</li>
        <li className=" flex p-1">Baby&apos;s & Toys</li>
        <li className=" flex p-1">Groceries & Pets</li>
        <li className=" flex p-1">Health & Beauty</li>
      </ul>
    </div>
  );
};

export default HeroCategory;
