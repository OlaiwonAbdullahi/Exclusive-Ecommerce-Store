import { TbSmartHome } from "react-icons/tb";
import {
  CiBoxList,
  CiShoppingTag,
  CiFolderOn,
  CiSettings,
  CiGift,
} from "react-icons/ci";
import { GoPeople } from "react-icons/go";

const Sidebar = ({ active, setActive }) => {
  const menuItems = [
    { icon: TbSmartHome, label: "Home" },
    { icon: CiShoppingTag, label: "Product" },
    { icon: CiBoxList, label: "Orders" },
    { icon: CiFolderOn, label: "Categories" },
    { icon: GoPeople, label: "Customers" },
    { icon: CiGift, label: "Coupons" },
    { icon: CiSettings, label: "Settings" },
  ];

  return (
    <div className="bg-secondary2 w-40 text-text h-screen flex flex-col gap-2 absolute ">
      <ul className="flex flex-col text-primarySelect">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-2 text-sm p-2 m-2 rounded-lg cursor-pointer ${
              active === item.label
                ? "text-secondary2 bg-white"
                : "hover:text-primary hover:bg-select"
            }`}
            onClick={() => setActive(item.label)} // Call setActive on click
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
