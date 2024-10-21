import revenue from "../assets/revenue.svg";
import order from "../assets/order.svg";
import visitor from "../assets/visitor.svg";
import conversion from "../assets/conversion.svg";
const DashBoardStats = () => {
  return (
    <div className=" flex justify-around gap-5 p-2">
      <div className=" bg-white shadow-md p-3 rounded-md flex flex-col gap-2 basis-1/4 w-2/3">
        <div className=" flex justify-between">
          <h2 className="text-text1 text-sm">Revenue</h2>
          <span className="text-sm text-secondary2">+22%</span>
        </div>
        <div className=" flex justify-between gap-2">
          <span className="text-2xl font-semibold">$7,825</span>
          <img src={revenue} alt="" className=" w-12 h-10" />
        </div>
      </div>
      <></>
      <div className=" bg-white shadow-md p-3 rounded-md flex flex-col gap-2 basis-1/4 w-2/3">
        <div className=" flex justify-between">
          <h2 className="text-text1 text-sm">Orders</h2>
          <span className="text-sm text-secondary2">-25%</span>
        </div>
        <div className=" flex justify-between gap-2">
          <span className="text-2xl font-semibold">920</span>
          <img src={order} alt="" className=" w-12 h-10" />
        </div>
      </div>
      <></>
      <div className=" bg-white shadow-md p-3 rounded-md flex flex-col gap-2 basis-1/4 w-2/3">
        <div className=" flex justify-between">
          <h2 className="text-text1 text-sm">Visitors</h2>
          <span className="text-sm text-button1">+49%</span>
        </div>
        <div className=" flex justify-between gap-2">
          <span className="text-2xl font-semibold">15.5K</span>
          <img src={visitor} alt="" className=" w-12 h-10" />
        </div>
      </div>
      <></>
      <div className=" bg-white shadow-md p-3 rounded-md flex flex-col gap-2 basis-1/4 w-2/3">
        <div className=" flex justify-between">
          <h2 className="text-text1 text-sm">Conversion</h2>
          <span className="text-sm text-secondary2">+1.9%</span>
        </div>
        <div className=" flex justify-between gap-2">
          <span className="text-2xl font-semibold">28%</span>
          <img src={conversion} alt="" className=" w-12 h-10" />
        </div>
      </div>
    </div>
  );
};

export default DashBoardStats;
