import Path from "../Components/Path";

const CheckOut = () => {
  return (
    <>
      <Path>Cart/CheckOut</Path>
      <div className=" flex justify-around">
        <div className=" basis-1/2 flex flex-col gap-2">
          <h2 className=" text-2xl font-semibold">Billing Details</h2>
          <form action="">
            <div className=" flex flex-col">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="address">
                Street Address{" "}
                <span className=" text-secondary2 text-sm">*</span>
              </label>
              <input
                type="address"
                id="name"
                required
                className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="floor">Apartment Floor</label>
              <input
                type="text"
                id="floor"
                className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
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
                className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
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
                className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="email">
                Email Address{" "}
                <span className=" text-secondary2 text-sm">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className=" bg-text1/10 md:w-1/3 w-full p-2 focus:outline-none text-sm rounded text-text1"
              />
            </div>
            <div className="">
              <input type="checkbox" className=" accent-secondary2 accent-sm" />
              <span>Save this information for faster check-out next time</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
