import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoading } from './LoadingContext';

// --- NEW IMPORTS ---
import { CartProvider } from '../context/CartContext';
import CartSidebar from '../components/CartSidebar'; 

// Page Imports
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
import Orders from "./orders.jsx";
import EmployeePanel from "./EmployeePanel.jsx";

// --- PROTECTED ROUTE WRAPPER ---
const ProtectedRoute = ({ children, allowedRole }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

const App = () => {
  const location = useLocation();
  const { triggerLoading, finishLoading } = useLoading();

  // 1. Force Global Black Background
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
  }, []);

  // 2. Global Route Change Observer
  useEffect(() => {
    triggerLoading();
    const timer = setTimeout(() => {
      finishLoading();
      window.scrollTo(0, 0);
    }, 1500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    // Wrap the entire application in the CartProvider
    <CartProvider>
      <div className="bg-black min-h-screen w-full">
        
        {/* The CartSidebar sits here so it can be toggled from any page */}
        <CartSidebar />

        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* PRODUCT CATEGORIES */}
          <Route path="/products/specializedvehicals" element={<SpecializedVehicals />} />
          <Route path="/products/protectivegear" element={<ProtectiveGear />} />
          <Route path="/products/armoury" element={<Armoury />} />
          <Route path="/products/optics" element={<Optics />} />
          <Route path="/products/guides&books" element={<GuidesBooks />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/products/unmannedvehicals" element={<UnmannedVehicals />} />

          {/* --- PROTECTED ROUTES --- */}
          
          {/* Only Admin can enter AdminPanel */}
          <Route path="/admin/adminpanel" element={
            <ProtectedRoute allowedRole="admin">
              <AdminPanel />
            </ProtectedRoute>
          } />

          {/* Only Employee can enter EmployeePanel */}
          <Route path="/employeepanel" element={
            <ProtectedRoute allowedRole="employee">
              <EmployeePanel />
            </ProtectedRoute>
          } />

          {/* Any logged in user can see Profile and Orders */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;