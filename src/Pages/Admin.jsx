import { useState } from "react";
import DashboardHeader from "../Components/DashoardHeader";
import Sidebar from "../Components/SideBar";

const Admin = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className="flex bg-[#F8F8F8] min-h-screen">
      <Sidebar className="w-1/4" active={active} setActive={setActive} />
      <div className="flex-grow p-4">
        <DashboardHeader active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default Admin;
