import { useEffect, useState } from "react";
import Button from "../Components/Button";
import Path from "../Components/Path";
import { auth, db } from "../Components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { CiLogout } from "react-icons/ci";

const Account = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserDetails(userDoc.data());
            toast.success(
              "Welcome Back to Exclusive Store Platform. Happy Shopping!",
              {
                position: "top-center",
              }
            );
          } else {
            toast.error("No such user data found!");
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
          toast.error("Error fetching user data");
        } finally {
          setLoading(false);
        }
      } else {
        console.log("User is not signed in");
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error Logging Out", error.message);
    }
  }

  return (
    <div className="p-10 justify-center flex flex-col items-center">
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-secondary2 rounded-full animate-spin"></div>
        </div>
      ) : userDetails ? (
        <>
          <div className="flex items-center justify-between w-full">
            <div>
              <Path>My Account</Path>
            </div>
            <div>
              Welcome{" "}
              <span className="text-secondary2">{userDetails.name}</span>
            </div>
          </div>

          <div className="flex md:flex-row w-11/12 p-3 justify-between flex-col">
            <div className="basis-1/3">
              <div className="flex flex-col">
                <h2 className="font-semibold">Manage My Account</h2>
                <div className="flex flex-col pl-4 p-2 text-text1">
                  <span className="text-secondary2">My Profile</span>
                  <span>Address Book</span>
                  <span>My Payment Options</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">My Order</h2>
                <div className="flex flex-col pl-4 p-2 text-text1">
                  <span>My Returns</span>
                  <span>My Cancellations</span>
                </div>
              </div>
              <div>
                <h2 className="font-semibold">My WishList</h2>
                <div
                  className="m-3"
                  onClick={() => {
                    handleLogout();
                    toast.success("LogOut Successful", {
                      position: "top-center",
                      icon: <CiLogout />,
                    });
                  }}
                >
                  <Button width={120}>Log Out</Button>
                </div>
              </div>
            </div>

            <div className="basis-2/3 flex justify-center bg-white shadow py-3 rounded">
              <form action="" className="w-2/3 flex gap-3 flex-col">
                <h2 className="text-secondary2 text-lg">Edit Your Profile</h2>
                <div className="flex w-full justify-around gap-4">
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      placeholder={userDetails.name}
                      disabled
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      placeholder={userDetails.name}
                      disabled
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-around gap-4">
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder={userDetails.email}
                      disabled
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="2,TypeShii str."
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                </div>
                <div className="flex gap-3 flex-col">
                  <div className="flex flex-col w-full">
                    <label htmlFor="CurrentPassword">Current Password</label>
                    <input
                      type="password"
                      id="CurrentPassword"
                      placeholder="Current Password"
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="NewPassword">New Password</label>
                    <input
                      type="password"
                      id="NewPassword"
                      placeholder="New Password"
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                    <input
                      type="password"
                      id="ConfirmNewPassword"
                      placeholder="Confirm New Password"
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex items-center gap-4 justify-end">
                    <div>
                      <span>Cancel</span>
                    </div>
                    <div>
                      <Button width={120}>Save Changes</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between w-full">
            <div>
              <Path>My Account</Path>
            </div>
            <div>
              Welcome <span className="text-secondary2">Null</span>
            </div>
          </div>

          <div className="flex md:flex-row w-11/12 p-3 justify-between flex-col">
            <div className="basis-1/3">
              <div className="flex flex-col">
                <h2 className="font-semibold">Manage My Account</h2>
                <div className="flex flex-col pl-4 p-2 text-text1">
                  <span className="text-secondary2">My Profile</span>
                  <span>Address Book</span>
                  <span>My Payment Options</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold">My Order</h2>
                <div className="flex flex-col pl-4 p-2 text-text1">
                  <span>My Returns</span>
                  <span>My Cancellations</span>
                </div>
              </div>
              <div>
                <h2 className="font-semibold">My WishList</h2>
              </div>
            </div>

            <div className="basis-2/3 flex justify-center bg-white shadow py-3 rounded">
              <form action="" className="w-2/3 flex gap-3 flex-col">
                <h2 className="text-secondary2 text-lg">Edit Your Profile</h2>
                <div className="flex w-full justify-around gap-4">
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      placeholder="Null"
                      disabled
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      placeholder="Null"
                      disabled
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-around gap-4">
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Null"
                      disabled
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex flex-col basis-1/2 w-2/3">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="2,TypeShii str."
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                </div>
                <div className="flex gap-3 flex-col">
                  <div className="flex flex-col w-full">
                    <label htmlFor="CurrentPassword">Current Password</label>
                    <input
                      type="password"
                      id="CurrentPassword"
                      placeholder="Current Password"
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="NewPassword">New Password</label>
                    <input
                      type="password"
                      id="NewPassword"
                      placeholder="New Password"
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                    <input
                      type="password"
                      id="ConfirmNewPassword"
                      placeholder="Confirm New Password"
                      className="bg-text1/10 p-2 focus:outline-none text-sm rounded text-text1"
                    />
                  </div>
                  <div className="flex items-center gap-4 justify-end">
                    <div>
                      <span>Cancel</span>
                    </div>
                    <div>
                      <Button width={120}>Save Changes</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Account;
