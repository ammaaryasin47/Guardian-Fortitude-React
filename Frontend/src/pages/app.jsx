import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./index.jsx";
import About from "./about.jsx";
import Services from "./services.jsx";
import Products from "./products.jsx";
import ContactUs from "./contactus.jsx";
import Quote from "./quote.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";
import SpecializedVehicals from "./products/specialized-vehicals.jsx";
import ProtectiveGear from "./products/protectivegear.jsx";
import Armoury from "./products/armoury.jsx";
import Optics from "./products/optics.jsx";
import GuidesBooks from "./products/guides&books.jsx";
import Accessories from "./products/accessories.jsx";
import UnmannedVehicals from "./products/unmannedvehicles.jsx";
import AdminPanel from "./admin/adminpanel.jsx";
import Profile from "./profile.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/specializedvehicals" element={<SpecializedVehicals />} />
      <Route path="/products/protectivegear" element={<ProtectiveGear />} />
      <Route path="/products/armoury" element={<Armoury />} />
      <Route path="/products/optics" element={<Optics />} />
      <Route path="/products/guides&books" element={<GuidesBooks />} />
      <Route path="/products/accessories" element={<Accessories />} />
      <Route path="/products/unmannedvehicals" element={<UnmannedVehicals />} />
      <Route path="/admin/adminpanel" element={<AdminPanel />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
};

export default App;
