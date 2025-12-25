import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./index.jsx";
import About from "./about.jsx";
import Services from "./services.jsx";
import Products from "./products.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default App;
