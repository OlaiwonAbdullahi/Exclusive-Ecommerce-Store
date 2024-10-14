import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MobileNavBar from "./Components/MobileNavBar";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <div className=" font-Afacad">
      <Router>
        <NavBar />
        <MobileNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
