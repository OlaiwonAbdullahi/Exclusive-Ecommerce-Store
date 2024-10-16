import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MobileNavBar from "./Components/MobileNavBar";
import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Shop from "./Pages/Shop";
import LogIn from "./Pages/LogIn";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Account from "./Pages/Account";
import ProductPage from "./Pages/ProductPage";

const App = () => {
  return (
    <div className=" font-Afacad ">
      <Router>
        <NavBar />
        <MobileNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
