import { MdKeyboardArrowDown } from "react-icons/md";
import { PiDotsThreeOutlineThin } from "react-icons/pi";

const DashoardHeader = () => {
  return (
    <div className=" flex justify-between">
      <div className="">DashBoard</div>
      <div className=" flex gap-4 items-center">
        <div className=" flex items-center bg-white rounded-md text-sm p-1">
          Oct 1 to Oct 23 <MdKeyboardArrowDown />
        </div>
        <div className="">
          <PiDotsThreeOutlineThin />
        </div>
      </div>
    </div>
  );
};

export default DashoardHeader;
