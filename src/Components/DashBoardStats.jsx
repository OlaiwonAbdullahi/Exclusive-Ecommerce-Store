import revenue from "../assets/revenue.svg";
const DashBoardStats = () => {
  return (
    <div>
      <div className="">
        <div className=" flex justify-between">
          <h2 className="text-text1 text-sm">Revenue</h2>
          <span className="text-sm text-secondary2">+22%</span>
        </div>
        <div className="">
          <span className="text-2xl font-semibold">$7,825</span>
          <img src={revenue} alt="" />
        </div>
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default DashBoardStats;
