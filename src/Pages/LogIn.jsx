import { useState } from "react";
import Button from "../Components/Button";
import Signupimg from "../assets/Signup.svg";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col md:flex-row py-2 items-center h-screen justify-center md:h-full mb-2">
      {/* Image Section for larger screens */}
      <div className="hidden md:block">
        <img src={Signupimg} alt="Signup" className="w-full h-[700px]" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full">
        <form
          action=""
          className="flex flex-col gap-4 justify-center md:w-2/3 w-full px-4 md:px-8 lg:px-16"
        >
          <div className="text-left">
            <h2 className="text-3xl font-medium">Log in to Exclusive Store</h2>
            <span className="text-base">Enter your details below</span>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <Button width={150}>Log In</Button>
            <span className="text-secondary2 cursor-pointer">
              Forgot Password?
            </span>
          </div>
        </form>
        <p className="mt-2 text-center">
          Don&apos;t have an account?{" "}
          <span className="underline cursor-pointer">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
