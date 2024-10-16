import Button from "../Components/Button";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div>
      <div className="">
        <img src="" alt="" />
      </div>
      <div className="">
        <form action="">
          <h2>Create an account</h2>
          <span>enter tour details below</span>

          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <Button>Create Account</Button>
          <button>
            <FcGoogle />
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
