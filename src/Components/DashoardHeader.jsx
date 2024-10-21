import { MdKeyboardArrowDown } from "react-icons/md";
import { RxDotsHorizontal } from "react-icons/rx";

const DashboardHeader = ({ active }) => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div className="text-xl font-bold">{active}</div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center bg-white rounded-md text-sm p-2 shadow-sm">
          Oct 1 to Oct 23 <MdKeyboardArrowDown className=" text-text1" />
        </div>
        <div className="p-2 text-text1">
          <RxDotsHorizontal />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
