import Button from "../Components/Button";
import Path from "../Components/Path";

const CheckOut = () => {
  return (
    <div className="   relative bg-text text-text1  w-2/3 max-w-md rounded-lg p-6 shadow-lg max-h-[90%]  items-center gap-2 flex flex-col justify-center ">
      <div className="  flex flex-col gap-2">
        <h2 className=" text-2xl font-semibold">Billing Details</h2>
        <form action="">
          <div className=" flex flex-col">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              className=" bg-text1/10  w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              className=" bg-text1/10  w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="address">
              Street Address <span className=" text-secondary2 text-sm">*</span>
            </label>
            <input
              type="address"
              id="name"
              required
              className=" bg-text1/10 w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="floor">Apartment Floor</label>
            <input
              type="text"
              id="floor"
              className=" bg-text1/10 w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="town">
              Town/City <span className=" text-secondary2 text-sm">*</span>
            </label>
            <input
              type="text"
              id="town"
              required
              className=" bg-text1/10  w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="phone">
              Phone Number <span className=" text-secondary2 text-sm">*</span>
            </label>
            <input
              type="number"
              id="phone"
              required
              className=" bg-text1/10 w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="email">
              Email Address <span className=" text-secondary2 text-sm">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className=" bg-text1/10  w-full p-2 focus:outline-none text-sm rounded text-text1"
            />
          </div>
          <div className="">
            <input type="checkbox" className=" accent-secondary2 accent-sm" />
            <span>Save this information for faster check-out next time</span>
          </div>
        </form>
      </div>
      <div className="">
        {/* <div className="p-5">
            <div className="flex justify-around">
              <div className="border border-text2 rounded bg-white p-3 flex flex-col gap-2">
                <div className="">Cart Total</div>
                <div className="flex justify-between border-b border-b-text1">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-b border-b-text1">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button width={200}>Proceed to checkout</Button>
              </div>
            </div>
          </div>*/}
      </div>
    </div>
  );
};

export default CheckOut;
