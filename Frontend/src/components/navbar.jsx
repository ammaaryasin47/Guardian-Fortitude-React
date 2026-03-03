import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // 1. Sync user state with LocalStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      {/* 🔹 Top contact bar */}
      <div className="hidden md:flex justify-start w-full border-b border-white py-2 px-4 text-sm">
        <div className="flex items-center border-r pr-3 border-white">
          <i className="fa-solid fa-envelope text-white px-2"></i>
          <p>guardianfortitudeservice@gmail.com</p>
        </div>
        <div className="flex items-center border-r px-3 border-white">
          <i className="fa-solid fa-phone px-2"></i>
          <p>+91 1234567890</p>
        </div>
        <div className="flex items-center px-3">
          <i className="fa-solid fa-location-dot px-2"></i>
          <p>Ahmedabad, Gujarat</p>
        </div>
      </div>

      {/* 🔹 Main navigation */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold items-center">
          <li><Link className="hover:!text-[#800000] hover:!no-underline" to="/">HOME</Link></li>
          <li><Link className="hover:!text-[#800000] hover:!no-underline" to="/about">ABOUT</Link></li>
          <li><Link className="hover:!text-[#800000] hover:!no-underline" to="/services">SERVICES</Link></li>
          <li><Link className="hover:!text-[#800000] hover:!no-underline" to="/products">PRODUCTS</Link></li>
          <li><Link className="hover:!text-[#800000] hover:!no-underline" to="/contactus">CONTACT US</Link></li>
          <li><Link className="hover:!text-[#800000] hover:!no-underline" to="/quote">QUOTE</Link></li>
          
          {/* 🔹 CONDITIONAL LOGIN / PROFILE LINK */}
          <li>
            {user ? (
              <Link 
                className="hover:!text-[#800000] hover:!no-underline flex items-center py-1 rounded-sm transition-all hover:border-[#800000]" 
                to="/profile"
              >
              PROFILE
              </Link>
            ) : (
              <Link className="hover:!text-[#800000] hover:!no-underline" to="/login">LOGIN</Link>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black border-b-2 border-white py-3 space-y-3 text-sm flex-wrap py-4">
          <div className="flex flex-col items-center">
            <Link className="hover:!text-[#800000] hover:!no-underline py-2" to="/">HOME</Link>
            <Link className="hover:!text-[#800000] hover:!no-underline py-2" to="/about">ABOUT</Link>
            <Link className="hover:!text-[#800000] hover:!no-underline py-2" to="/services">SERVICES</Link>
            <Link className="hover:!text-[#800000] hover:!no-underline py-2" to="/products">PRODUCTS</Link>
            <Link className="hover:!text-[#800000] hover:!no-underline py-2" to="/contactus">CONTACT US</Link>
            <Link className="hover:!text-[#800000] hover:!no-underline py-2" to="/quote">QUOTE</Link>
            
            {/* 🔹 MOBILE LOGIN / PROFILE */}
            {user ? (
              <Link className="hover:!text-[#800000] hover:!no-underline py-2 font-bold" to="/profile text-maroon">
                <i className="fa-solid fa-user-shield pr-2"></i> PROFILE
              </Link>
            ) : (
              <Link className="hover:!text-[#800000] hover:!no-underline py-2" to="/login">LOGIN</Link>
            )}
          </div>
          
          {/* Contact details footer for mobile */}
          <div className="flex flex-col items-center text-white border-t-2 border-[#800000] pt-3 w-full">
            <div className="flex items-center py-2">
              <i className="fa-solid fa-envelope text-white px-2"></i>
              <p>guardianfortitudeservice@gmail.com</p>
            </div>
            <div className="flex items-center py-2">
              <i className="fa-solid fa-phone px-2"></i>
              <p>+91 1234567890</p>
            </div>
            <div className="flex items-center px-3 py-2">
              <i className="fa-solid fa-location-dot px-2"></i>
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;