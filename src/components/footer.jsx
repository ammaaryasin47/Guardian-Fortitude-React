import React from "react";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col bg-black text-white">

      <div className="w-full border-t-2 border-white p-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col items-center text-center">
          <img className="w-[150px] h-auto pb-4" src={Logo} alt="Logo" />
          
          <p className="text-sm">Fortifying The Present,</p>
          <p className="text-sm">Safeguarding The Future ...</p>
          <p className="text-sm">We Are The Saviours ,</p>
          <p className="text-sm">The Last Hope ,</p>
          <p className="text-sm">We Are</p>

          <p className="font-bold text-lg pt-3">
            THE GUARDIAN FORTITUDE
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold pb-2 border-b-2 border-[#800000]">
            OFFICE
          </h3>

          <p className="text-sm mt-4">D-Fuzer HQ Security Wing ,</p>
          <p className="text-sm">99th Avenue,</p>
          <p className="text-sm">Ahmedabad , INDIA</p>

          <div className="flex items-center gap-2 mt-4 text-sm">
            <i className="fa-solid fa-envelope"></i>
            <p>guardianfortitudeservice@gmail.com</p>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm">
            <i className="fa-solid fa-phone"></i>
            <p>+91 1234567890</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold pb-2 border-b-2 border-[#800000]">
            PAGES
          </h3>

          <div className="flex flex-col mt-4 space-y-2 text-sm">
            {["HOME", "ABOUT", "SERVICES", "PRODUCTS", "CONTACT US", "QUOTE", "LOGIN"].map((item) => (
              <a key={item} href="#" className="hover:text-[#800000] hover:no-underline">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold pb-2 border-b-2 border-[#800000]">
            TO RECEIVE LATEST UPDATES
          </h3>

          <input
            type="email"
            placeholder="EMAIL"
            className="mt-4 w-full max-w-xs rounded-md bg-black/10 px-3 py-2 text-white placeholder-gray-400 outline outline-1 outline-gray-500 focus:outline-2 focus:outline-[#800000]"/>
        </div>

      </div>

      <div className="text-center w-full border-t-2 border-gray-600 py-4 text-sm">
        <p>D-FUZER® ARMY © 2025 - All Rights Reserved</p>
        <p>Guardian Fortitude Is A Registered Trademark Under D-FUZER® ARMY</p>
      </div>

    </div>
  );
}
