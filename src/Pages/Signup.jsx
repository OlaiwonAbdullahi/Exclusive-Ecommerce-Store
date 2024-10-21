import Button from "../Components/Button";
import { FcGoogle } from "react-icons/fc";
import Signupimg from "../assets/Signup.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Components/firebase"; // Import Firestore db
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore"; // Import Firestore methods

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      // Save user data to Firestore
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: user.email,
        });
      }

      console.log("User successfully registered and saved to Firestore");
      toast.success(
        "You've successfully created an account on Exclusive Store Platform. Happy Shopping!",
        {
          position: "top-center",
        }
      );
      window.location.href = "/login";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row py-2 h-screen items-center justify-center">
      {/* Image Section */}
      <div className="hidden md:block">
        <img src={Signupimg} alt="Signup" className="w-full h-[700px]" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center h-full">
        <form
          action=""
          onSubmit={handleRegister}
          className="flex flex-col gap-4 justify-center md:w-2/3 w-full px-4 md:px-8 lg:px-16"
        >
          <div className="text-left">
            <h2 className="text-3xl font-medium">Create an account</h2>
            <span className="text-base">Enter your details below</span>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-text1 text-text1 border-b border-b-text1 p-2 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <Button>Create Account</Button>
            <button className="hover:bg-text1/10 text-lg items-center justify-center gap-2 flex p-2 rounded bg-white border border-text2">
              <FcGoogle className="h-6 w-6" />
              Sign Up with Google
            </button>
          </div>
        </form>
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <span className="underline cursor-pointer">
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
