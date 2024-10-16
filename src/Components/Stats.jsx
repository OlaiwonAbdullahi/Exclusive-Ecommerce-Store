import seller from "../assets/sellers.svg";
import product from "../assets/product.svg";
import customers from "../assets/customers.svg";
import money from "../assets/money.png";
const Stats = () => {
  return (
    <div className=" flex p-2 justify-around w-3/4">
      <div className=" border border-text1 rounded flex flex-col justify-center items-center text-text2 hover:border-text hover:bg-secondary2 hover:text-text p-2 ">
        <img src={seller} alt="" className=" h-12 w-12" />
        <h2 className=" text-2xl font-semibold">10.5k</h2>
        <span className=" text-sm">Sellers Active On our Site</span>
      </div>
      <div className=" border border-text1 rounded flex flex-col justify-center items-center text-text2 hover:border-text hover:bg-secondary2 hover:text-text p-2 ">
        <img src={product} alt="" className=" h-12 w-12" />
        <h2 className=" text-2xl font-semibold">33k</h2>
        <span className=" text-sm">Monthly Product Sales</span>
      </div>
      <div className=" border border-text1 rounded flex flex-col justify-center items-center text-text2 hover:border-text hover:bg-secondary2 hover:text-text p-2 ">
        <img src={customers} alt="" className=" h-12 w-12" />
        <h2 className=" text-2xl font-semibold">45.5k</h2>
        <span className=" text-sm">Customers Active On our Site</span>
      </div>
      <div className=" border border-text1 rounded flex flex-col justify-center items-center text-text2 hover:border-text hover:bg-secondary2 hover:text-text p-2 ">
        <img src={money} alt="" className=" h-12 w-12" />
        <h2 className=" text-2xl font-semibold">25k</h2>
        <span className=" text-sm">Anual Gross sale in our Sitre</span>
      </div>
    </div>
  );
};

export default Stats;
