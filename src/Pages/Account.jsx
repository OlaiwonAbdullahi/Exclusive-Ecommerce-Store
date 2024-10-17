import Button from "../Components/Button";
import Path from "../Components/Path";

const Account = () => {
  return (
    <div className=" p-10 justify-center flex flex-col items-center ">
      <div className=" flex items-center justify-between w-full ">
        <div className="">
          <Path>My Account</Path>
        </div>
        <div className="">
          Welcome <span className=" text-secondary2">Abdullahi</span>
        </div>
      </div>

      <div className=" flex md:flex-row w-11/12 p-3 justify-between flex-col">
        <div className=" basis-1/3">
          <div className=" flex flex-col">
            <h2 className=" font-semibold">Manage My Account</h2>

            <div className=" flex flex-col pl-4 p-2 text-text1">
              <span className=" text-secondary2">My Profile</span>
              <span>Address Book</span>
              <span>My Payment Options</span>
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-semibold">My Order</h2>
            <div className="flex flex-col pl-4 p-2 text-text1">
              <span>My Returns</span>
              <span>My Cancellations</span>
            </div>
          </div>
          <div className="">
            <h2 className=" font-semibold">My WishList</h2>
          </div>
        </div>
        <div className=" basis-2/3 flex justify-center bg-white shadow py-3 rounded">
          <form action="" className=" w-2/3 flex gap-3 flex-col">
            <h2 className="text-secondary2 text-lg">Edit Your Profile</h2>
            <div className=" flex w-full justify-around gap-4">
              <div className=" flex flex-col basis-1/2 w-2/3">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Abdullahi"
                  className=" bg-text1/10  p-2 focus:outline-none text-sm rounded text-text1"
                />
              </div>
              <div className="flex flex-col basis-1/2 w-2/3">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Olaiwon"
                  className=" bg-text1/10  p-2 focus:outline-none text-sm rounded text-text1"
                />
              </div>
            </div>
            <div className="  flex w-full justify-around gap-4">
              <div className="  flex flex-col basis-1/2 w-2/3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="olaiwonabdullahi@gmail.com"
                  className=" bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                />
              </div>
              <div className=" flex flex-col basis-1/2 w-2/3">
                <label htmlFor="lastname">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder=" 2,TypeShii str."
                  className=" bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                />
              </div>
            </div>
            <div className="flex gap-3 flex-col">
              <div className=" flex flex-col w-full">
                <label htmlFor="CurrentPassword">Current Password</label>
                <input
                  type="password"
                  id="CurrentPassword"
                  placeholder=" Current Password"
                  className=" bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                />
              </div>
              <div className=" flex flex-col w-full gap-2">
                <label htmlFor="NewPassword">New Password</label>
                <input
                  type="password"
                  id="NewPassword"
                  placeholder=" New Password"
                  className=" bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                />
                <input
                  type="password"
                  id="NewPassword"
                  placeholder=" Confirm New Password"
                  className=" bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                />
              </div>
              <div className=" flex items-center gap-4 justify-end">
                <div className="">
                  <span>Cancel</span>
                </div>
                <div className="">
                  <Button width={120}>Save Changes</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
