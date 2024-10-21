import { CiGrid42 } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxDotsHorizontal } from "react-icons/rx";

const DashboardHeader = ({ active, openSidebar, setOpenSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <div className="text-xl font-bold">{active}</div>
      <div className="flex gap-1 md:gap-4 items-center">
        <div className="flex items-center bg-white rounded-md text-sm p-2 shadow-sm">
          Oct 1 to Oct 23 <MdKeyboardArrowDown className=" text-text1" />
        </div>
        <button
          className="mb-4 flex justify-end"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          {!openSidebar ? (
            <CiGrid42 className="h-5 w-5" />
          ) : (
            <LiaTimesSolid className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
