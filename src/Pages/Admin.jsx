import { useState } from "react";
import DashboardHeader from "../Components/DashoardHeader";
import Sidebar from "../Components/SideBar";
import DashBoardStats from "../Components/DashBoardStats";
import DashboardGraph from "../Components/DashboardGraph";

const Admin = () => {
  const [active, setActive] = useState("Home");
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleMenuItemClick = (label) => {
    setActive(label);
    if (openSidebar) {
      setOpenSidebar(false);
    }
  };

  return (
    <div className="flex justify-between min-h-screen bg-[#F8F8F8]">
      <div className="hidden md:block w-1/12 mr-5">
        <Sidebar
          active={active}
          setActive={handleMenuItemClick}
          openSidebar={true}
        />
      </div>

      <div className="flex-grow md:m-3">
        {openSidebar && (
          <div className="md:hidden flex z-50">
            <Sidebar
              active={active}
              setActive={handleMenuItemClick}
              openSidebar={openSidebar}
            />
          </div>
        )}

        <DashboardHeader
          active={active}
          setActive={setActive}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <DashBoardStats />
        <DashboardGraph />
      </div>
    </div>
  );
};

export default Admin;
