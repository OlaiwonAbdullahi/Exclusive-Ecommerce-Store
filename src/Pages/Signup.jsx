import Button from "../Components/Button";
import { FcGoogle } from "react-icons/fc";
import Signupimg from "../assets/Signup.svg";

const Signup = () => {
  return (
    <div className=" flex py-2">
      <div className="">
        <img src={Signupimg} alt="" className=" w-3/4" />
      </div>
      <div className="">
        <form action="">
          <h2>Create an account</h2>
          <span>enter tour details below</span>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
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
