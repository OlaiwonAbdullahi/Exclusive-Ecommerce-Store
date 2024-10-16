import seller from "../assets/sellers.svg";
import product from "../assets/product.svg";
import customers from "../assets/customers.svg";
import gross from "../assets/gross.svg";

const statsData = [
  {
    imgSrc: seller,
    value: "10.5k",
    label: "Sellers Active On our Site",
  },
  {
    imgSrc: product,
    value: "33k",
    label: "Monthly Product Sales",
  },
  {
    imgSrc: customers,
    value: "45.5k",
    label: "Customers Active On our Site",
  },
  {
    imgSrc: gross,
    value: "25k",
    label: "Annual Gross Sale on our Site",
  },
];

const Stats = () => {
  return (
    <div className="flex flex-wrap justify-around p-2 w-3/4 my-4 mx-auto gap-4">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="border border-text1 rounded flex flex-col justify-center items-center text-text2 hover:border-text hover:bg-secondary2 hover:text-text p-2 transition duration-300 "
        >
          <img src={stat.imgSrc} alt={stat.label} className="h-12 w-12 mb-2" />
          <h2 className="text-2xl font-semibold">{stat.value}</h2>
          <span className="text-sm text-center">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
