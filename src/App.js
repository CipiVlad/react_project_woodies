import "./App.scss";
import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import Categories from "./pages/Categories";
import Testimony from "./pages/Testimony";
import SignUp from "./pages/SignUp";
import CategoriesDetail from "./pages/CategoriesDetail";
import productData from "./productData.json";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/testimony" element={<Testimony />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/item/:uniqueId" element={<CategoriesDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
