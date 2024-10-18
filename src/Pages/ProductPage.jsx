import StarRating from "../Components/StarRating";
import Button from "../Components/Button";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const ProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center p-4">
      {/* Left side: Product images */}
      <div className="md:basis-2/3 p-3 flex flex-col gap-2 justify-center mx-auto w-full md:w-1/2">
        <div className="w-full">
          <img
            src="https://placehold.co/620x300"
            alt=""
            className="rounded w-full h-auto"
          />
        </div>
        <div className="flex justify-between gap-3 w-full">
          <img
            src="https://placehold.co/200x100"
            alt=""
            className="rounded w-1/3 h-auto"
          />
          <img
            src="https://placehold.co/200x100"
            alt=""
            className="rounded w-1/3 h-auto"
          />
          <img
            src="https://placehold.co/200x100"
            alt=""
            className="rounded w-1/3 h-auto"
          />
        </div>
      </div>

      {/* Right side: Product details */}
      <div className="flex flex-col p-5 w-full md:w-1/2 gap-2 justify-center mx-auto">
        <div className="md:w-3/4 w-full">
          <h2 className="text-2xl font-semibold whitespace-nowrap">
            Havic HV G-92 GamePad
          </h2>
          <div className="flex text-sm p-1 items-center gap-0.5 justify-between w-1/3">
            <StarRating /> <span className="text-text1">(3.8)</span>
            <span>|</span>
            <span className="text-button1 whitespace-nowrap">In Stock</span>
          </div>
          <div>
            Brand: <span className="text-secondary2 uppercase">XIAOMI</span>
          </div>
          <span className="text-2xl font-medium">$192.00</span>
          <div className="md:w-3/4 w-full">
            <p className="text-center md:text-start">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
        </div>
        <div className="md:w-3/5 w-full">
          <hr className="border-t border-t-text1/45" />
        </div>

        {/* Quantity and action buttons */}
        <div className="flex flex-col justify-center mx-auto p-2 w-full">
          <div className="flex p-2 items-center gap-4 w-full">
            <div className="flex">
              <div className="border bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 border-text2 items-center flex justify-center text-xl rounded-l-sm p-1">
                <FiMinus />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="2"
                  className="placeholder:text-text2 text-2xl h-10 border-y border-y-text2 focus:outline-none p-1 w-16 text-center"
                />
              </div>
              <div className="border bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2 border-text2 items-center p-1 flex justify-center text-xl rounded-r-sm">
                <GoPlus />
              </div>
            </div>

            <div>
              <Button width={120}>Buy Now</Button>
            </div>

            <div className="border border-text2 rounded p-1 bg-white hover:bg-secondary2 hover:text-text hover:border-secondary2">
              <CiHeart className="h-6 w-6" />
            </div>
          </div>

          {/* Product details section */}
          <div className="flex justify-between md:w-1/2 w-full items-center p-2 border border-text1/10 shadow rounded">
            <div className="flex flex-col text-secondary2">
              <span>1 Year Warranty</span>
              <span>7 Days Return Policy</span>
              <span>Ships in 2 Weeks</span>
            </div>
            <div>
              <img
                src="https://placehold.co/100"
                alt="Product Image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
