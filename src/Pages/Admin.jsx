import DashoardHeader from "../Components/DashoardHeader";
import Sidebar from "../Components/SideBar";

const Admin = () => {
  return (
    <div className=" flex bg-[#F8F8F8]">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <DashoardHeader />
      </div>
    </div>
  );
};

export default Admin;
