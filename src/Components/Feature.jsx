import Service from "../assets/Services.png";
import money from "../assets/money.png";
import customer from "../assets/customer.png";

const Feature = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex justify-around text-center w-2/3 md:flex-row flex-col gap-4">
        <div className="flex justify-center items-center flex-col">
          <img src={Service} alt="" className="h-16 w-16" />
          <h2 className="font-semibold mt-2">FREE AND FAST DELIVERY</h2>
          <span className="text-sm">
            Free Delivery for all orders over $140
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={customer} alt="" className="h-16 w-16" />
          <h2 className="font-semibold mt-2">24/7 CUSTOMER SERVICE</h2>
          <span className="text-sm">Friendly 24/7 customer support</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={money} alt="" className="h-16 w-16" />
          <h2 className="font-semibold mt-2">MONEY BACK GUARANTEE</h2>
          <span className="text-sm">We return money within 30 days</span>
        </div>
      </div>
    </div>
  );
};

export default Feature;
