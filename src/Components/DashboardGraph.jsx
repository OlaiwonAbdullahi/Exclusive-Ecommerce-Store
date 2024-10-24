import { MdArrowForward } from "react-icons/md";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const DashboardGraph = () => {
  const data = [
    { day: 1, revenue: 1200 },
    { day: 2, revenue: 850 },
    { day: 3, revenue: 950 },
    { day: 4, revenue: 1600 },
    { day: 5, revenue: 1350 },
    { day: 6, revenue: 1700 },
    { day: 7, revenue: 900 },
    { day: 8, revenue: 1450 },
    { day: 9, revenue: 1100 },
    { day: 10, revenue: 1250 },
    { day: 11, revenue: 1400 },
    { day: 12, revenue: 1150 },
    { day: 13, revenue: 1750 },
    { day: 14, revenue: 1300 },
    { day: 15, revenue: 1500 },
    { day: 16, revenue: 1550 },
    { day: 17, revenue: 1350 },
    { day: 18, revenue: 1650 },
    { day: 19, revenue: 900 },
    { day: 20, revenue: 1450 },
    { day: 21, revenue: 1600 },
    { day: 22, revenue: 1400 },
    { day: 23, revenue: 1300 },
    /*{ day: 24, revenue: 1750 },
    { day: 25, revenue: 1800 },
    { day: 26, revenue: 1500 },
    { day: 27, revenue: 1600 },
    { day: 28, revenue: 1200 },
    { day: 29, revenue: 1550 },
    { day: 30, revenue: 1700 },
    { day: 31, revenue: 1650 },*/
  ];

  return (
    <div className="flex p-2 gap-8 flex-col md:flex-row">
      <div className="bg-white shadow-sm rounded basis-2/3 p-2 pt-4 text-sm">
        <div className=" flex items-center justify-between m-2">
          <span className="text-xl font-semibold">Dashboard</span>
          <div className=" flex items-center">
            Advance Report <MdArrowForward />
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid stroke="#ffffff" />
            <XAxis dataKey="day" />
            <YAxis />
            <Bar
              dataKey="revenue"
              fill="#DB4444"
              radius={[10, 10, 10, 10]}
              barSize={5}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="basis-1/3 bg-white shadow-sm rounded  p-2 pt-4 text-sm">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <CartesianGrid stroke="#ffffff" />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#DB4444"
              fill="#E07575"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardGraph;
