import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactUsBanner from "../assets/IMAGES/CONTACT US/CONTACTUS-Banner.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const ContactUs = () => {

  const markerIcon =
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";

  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  useEffect(() => {
    const map = L.map("map").setView([23.0225, 72.5714], 13);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      { attribution: "&copy; OpenStreetMap contributors" }
    ).addTo(map);

    L.marker([23.0225, 72.5714], { icon: customIcon })
      .addTo(map)
      .bindPopup("<b>GUARDIAN FORTITUDE</b><br/>Dispatch Center");

    return () => map.remove();
  }, []);

  return (
    <div className="bg-black">

      <Navbar />

      <div className="relative h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] my-5 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-75 blur-sm"
          style={{ backgroundImage: `url(${ContactUsBanner})` }}
        />
        <div className="relative h-full flex items-center justify-center text-3xl text-white">
          CONTACT US
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 py-6 text-center text-white">
        <div>
          <i className="fa-solid fa-location-dot text-4xl my-4"></i>
          <h2 className="text-xl border-t-2 border-[#800000] pt-4">
            Ahmedabad, Gujarat, India
          </h2>
        </div>
        <div>
          <i className="fa-solid fa-envelope text-4xl my-4"></i>
          <h2 className="text-xl border-t-2 border-[#800000] pt-4 break-all">
            guardianfortitudeservice@gmail.com
          </h2>
        </div>
        <div>
          <i className="fa-solid fa-phone text-4xl my-4"></i>
          <h2 className="text-xl border-t-2 border-[#800000] pt-4">
            +91 123456789
          </h2>
        </div>
      </div>

      <div className="mt-10 px-4">
        <div className="flex flex-col lg:flex-row gap-10">

          <div
            id="map"
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg border-r-2 border-[#800000]"
          />

          <div className="w-full lg:w-1/2 text-white mb-5"> 
          <h2 className="text-3xl md:text-4xl text-center mb-8"> CONTACT FORM </h2> 
            <form id="contact-form" className="flex flex-col gap-6"> 
              <div> 
                <label className="text-lg">NAME</label> 
                <input type="text" className="w-full bg-transparent border-b border-gray-500 text-xl outline-none py-2" required /> 
              </div> 

              <div> 
                <label className="text-lg">CONTACT</label> 
                <input type="tel" pattern="[0-9]{10}" className="w-full bg-transparent border-b border-gray-500 text-xl outline-none py-2" required /> 
              </div> 

              <div> 
                <label className="text-lg">EMAIL ID</label> 
                <input type="email" className="w-full bg-transparent border-b border-gray-500 text-xl outline-none py-2" required /> 
              </div> 

              <div> 
                <label className="text-lg">MESSAGE</label> 
                <textarea rows="2" className="w-full bg-transparent border-b border-gray-500 text-xl outline-none py-2 resize-none" required /> 
              </div> 
              <div className="flex items-center"> 
                <button type="submit" className="btn btn-danger mt-4 d-flex items-center gap-2 w-fit"> SEND 
                  <i class="fa-solid fa-caret-right"></i>
                </button> 
              </div> 
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
