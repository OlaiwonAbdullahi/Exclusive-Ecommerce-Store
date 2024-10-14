import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MobileNavBar from "./Components/MobileNavBar";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className=" font-Afacad">
      <Router>
        <NavBar />
        <MobileNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
