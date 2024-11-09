import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import DigitalProduct from "./pages/product/digitalProduct";
import PrintedProduct from "./pages/product/printedProduct";
import Profile from "./pages/profile";
import AboutUs from "./pages/aboutUs";
import OurServices from "./pages/ourServices";
import Contact from "./pages/contact";
import Details from "./pages/details";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartPage from "./pages/cartPage.jsx/cartPage";
import CategoryPage from "./pages/categories/categoryPage";
import SubCategory from "./pages/categories/subCategoryPage";
// import "./assets/css/bootstrap.min.css"
// import "./assets/css/home_furniture.css"
// import "./assets/css/jquery-ui.css"
// import Dashboard from "./pages/dashboard";
// import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/digital" element={<DigitalProduct />} />
        <Route path="/printed" element={<PrintedProduct />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourservice" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/sub-category/:id" element={<SubCategory />} />
      </Routes>
    </div>
  );
}

export default App;
