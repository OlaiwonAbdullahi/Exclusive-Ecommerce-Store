import StarRating from "../Components/StarRating";
import Button from "../Components/Button";
import { CiHeart } from "react-icons/ci";
const ProductPage = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" basis-2/3">
        <img src="https://placehold.co/600x400" alt="" />
      </div>
      <div className="  flex flex-col p-5 w-2/3 gap-2 ">
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold ">HAvic HV G-92 GamePad</h2>
          <div className=" flex text-sm p-1 items-center justify-between w-1/3">
            <StarRating />
            <span>|</span>
            <span className=" text-button1">In Stock</span>
          </div>
          <div className="">
            Brand: <span className="text-secondary2 uppercase">XIAOMI</span>
          </div>
          <span className=" text-2xl">$192.00</span>

          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
        </div>
        <div className=" w-2/3">
          <hr className="border-t border-t-text1/45" />
        </div>
        <div className="">
          <div className=" flex  p-2  items-center gap-4">
            <div className=" flex ">
              <div className=" border bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 border-text2 w-6 items-center flex justify-center text-xl rounded-l-sm">
                -
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="2"
                  className="  placeholder:text-text2 text-2xl h-10 border-y border-y-text2 focus:outline-none p-1 w-16"
                />
              </div>
              <div className="border bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 border-text2 w-6 items-center flex justify-center text-xl rounded-r-sm">
                +
              </div>
            </div>
            <div className="">
              <Button width={120}>Buy Now</Button>
            </div>
            <div className="border border-text2 rounded p-1">
              <CiHeart className=" h-6 w-6" />
            </div>
          </div>
          <div className="">
            <div className="">
              <span>1 Year Warranty</span>
              <span> 7 days return Policy</span>
              <span>Ships in 2 Weeks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
