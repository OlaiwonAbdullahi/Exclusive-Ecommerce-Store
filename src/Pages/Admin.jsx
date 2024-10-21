import { useState } from "react";
import DashboardHeader from "../Components/DashoardHeader";
import Sidebar from "../Components/SideBar";
import DashBoardStats from "../Components/DashBoardStats";
import DashboardGraph from "../Components/DashboardGraph";
import { CiGrid42 } from "react-icons/ci";

const Admin = () => {
  const [active, setActive] = useState("Home");
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex bg-[#F8F8F8] min-h-screen">
      <Sidebar className="w-1/4" active={active} setActive={setActive} />
      <div
        className="flex-grow p-4"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <button className="">
          <CiGrid42 className=" h-5 w-5" />
        </button>
        <DashboardHeader active={active} setActive={setActive} />
        <DashBoardStats />
        <DashboardGraph />
      </div>
    </div>
  );
};

export default Admin;
