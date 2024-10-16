import Button from "../Components/Button";
import { FcGoogle } from "react-icons/fc";
import Signupimg from "../assets/Signup.svg";

const Signup = () => {
  return (
    <div className=" flex py-2">
      <div className="">
        <img src={Signupimg} alt="" className=" w-3/4" />
      </div>
      <div className=" ">
        <form action="" className=" flex flex-col gap-2">
          <div className="">
            <h2 className=" text-3xl font-medium">Create an account</h2>
            <span className=" text-base">Enter our Details Below</span>
          </div>
          <div className=" flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className=" placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className=" placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className=" placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />
          </div>
          <Button>Create Account</Button>
          <button className=" rounded bg-white border border-text2">
            <FcGoogle />
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
