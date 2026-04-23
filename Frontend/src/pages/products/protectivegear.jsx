import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCart, Maximize2, X, Trash2, ShieldCheck } from 'lucide-react';
import { useCart } from "../../context/CartContext"; // Correct context path

const ProtectiveGears = () => {
  const { cart, addToCart, setIsCartOpen } = useCart();
  const ProductsBanner = 'https://armour-works.com/images/banner.jpg';

  // --- DATA SECTIONS ---
  const headGear = [
    { id: "Armor-Head-Mandible", title: "Ballistic Head Gear (With Mandible)", oldPrice: "$100,000", price: "$85,000", discount: "15% OFF", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Helmets/ACH%20Combat%20Helmets/Kavro%20ACH-126T/Mandible-Helmet_Right_463_72-dpi-228x228.png" },
    { id: "Armor-Head-Olive", title: "Ballistic Head Gear (Olive Green)", price: "$60,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Helmets/ACH%20Combat%20Helmets/Kavro%20ACH-4/MKH-ACH-4-Product-Left-228x228.png" },
    { id: "Armor-Head-Black", title: "Ballistic Head Gear (Black)", price: "$70,000", tag: "NEW", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Helmets/ACH%20Combat%20Helmets/Kavro%20ACH-126%20T/Kavro%20ACH-126%20T%20(1)-228x228.png" },
    { id: "Armor-Head-Tan", title: "Ballistic Head Gear (Desert Tan)", price: "$70,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Helmets/ACH%20Combat%20Helmets/Kavro%20ACH-125%20T/Kavro%20ACH-125%20T%20(4)-228x228.png" },
    { id: "Armor-Head-Visor", title: "Ballistic Visor", price: "$50,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Helmets/Accessories/Kavro%20Visors/KAVRO-VD-20-SM_Product_Image-228x228.png" },
    { id: "Armor-Head-Glasses", title: "Ballistic Glasses", price: "$30,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Helmets/Accessories/Kavro%20Ballistic%20Eyewear/KAVRO-BALLISTIC-EYEWEAR-(3)-228x228.png" },
    { id: "Armor-Head-Headset", title: "Ballistic Headset", price: "$40,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Helmets/Accessories/Kavro%20Visors/VD-06%20FM/VD-06-FM-(3)-228x228.png" },
    { id: "Armor-Head-Camo", title: "Ballistic Head Gear (Camouflage)", price: "$25,000", img: "https://www.mku.com/image/cache/catalog/Kavro-ACH-114T-Left-463x421.png" }
  ];

  const plateCarriers = [
    { id: "Armor-PltCr-Black", title: "Ballistic Plate Carrier (Black)", price: "$9,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Vest/Covert%20Overvests/TAC-II%20(FR)-228x228.png" },
    { id: "Armor-PltCr-Olive", title: "Ballistic Plate Carrier (Olive Green)", price: "$9,500", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Vest/Tactical%20Overvests/PLATE%20CARRIER/Plate_Carrier_Side-228x228.png" },
    { id: "Armor-PltCr-Tan", title: "Ballistic Plate Carrier (Desert Tan)", price: "$90,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Vest/Special%20Purpose%20Vest/EXTRA%20PROTECTION%20VEST/Extra_Portection_Vest-1-228x228.png" },
    { id: "Armor-PltCr-Blue", title: "Ballistic Plate Carrier (Blue)", price: "$8,000", tag: "NEW", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Vest/Protech%20Overvests/FRONT%20OPENING%20OVER%20VEST/Left_Opening_OverVest-228x228.png" },
    { id: "Armor-PltCr-WPlate1", title: "Ballistic Plate Carrier (With Plate)", oldPrice: "$10,000", price: "$8,500", discount: "15% OFF", img: "https://www.mku.com/image/cache/catalog/Kavro-TAC-I-IIA+_mood-shot-228x228.png" },
    { id: "Armor-PltCr-WPlate2", title: "Ballistic Plate Carrier (With Plate)", price: "$8,000", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Vest/Tactical%20Overvests/FRONT%20OPENING%20VEST/front-image-228x228.png" },
    { id: "Armor-PltCr-WPlate3", title: "Ballistic Plate Carrier (With Plate)", price: "$8,300", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Vest/Tactical%20Overvests/BODY%20ARMOUR%20WITH%20UPPER%20BODY%20EXO/KAVRO-TAC-I-IIB+_Product-image-228x228.png" },
    { id: "Armor-PltCr-Standard", title: "Ballistic Plate Carrier", price: "$10,000", tag: "NEW", img: "https://www.mku.com/image/cache/catalog/Kavro%20Ballistic%20Vest/Kavro%20Ballistic%20Vest-228x228.png" }
  ];

  const shields = [
    { id: "Armor-Shld-Briefcase", title: "Ballistic Briefcase", price: "$11,000", img: "https://www.mku.com/image/cache/catalog/SHIELDS/SOFT%20SHIELD/BALLISTIC%20BRIEFCASE_SPB-I-IA/Ballistic_%20briefcase_SPB_Side-463x463.png" },
    { id: "Armor-Shld-MSH11", title: "Hand Held Shield (MSH-11)", price: "$8,500", img: "https://www.mku.com/image/cache/catalog/SHIELDS/HARD%20SHIELD/MSH-11-Shield-Side-228x228.png" },
    { id: "Armor-Shld-MSH08", title: "Hand Held Shield (MSH-08)", price: "$9,500", tag: "NEW", img: "https://www.mku.com/image/cache/catalog/SHIELDS/HARD%20SHIELD/MSH-08-228x228.png" },
    { id: "Armor-Shld-MSH03", title: "Hand Held Shield (MSH-03)", oldPrice: "$15,000", price: "$12,000", discount: "20% OFF", img: "https://www.mku.com/image/cache/catalog/SHIELDS/HARD%20SHIELD/HARD%20SHIELDS_MHS-03/HARD-SHIELDS-MSH-03-228x228.png" },
    { id: "Armor-Shld-MSH04A", title: "Hand Held Shield (MSH-04A)", price: "$11,500", img: "https://www.mku.com/image/cache/catalog/SHIELDS/HARD%20SHIELD/HARD%20SHIELDS_MHS-04/HARD%20SHIELDS_MHS-04%20(2)-228x228.png" },
    { id: "Armor-Shld-MSH01", title: "Hand Held Shield (MSH-01)", oldPrice: "$8,500", price: "$7,500", discount: "10% OFF", img: "https://www.mku.com/image/cache/catalog/SHIELDS/HARD%20SHIELD/HARD%20SHIELDS_MHS-01/HARD%20SHIELDS_MHS-01%20(2)-228x228.png" },
    { id: "Armor-Shld-MSH06", title: "Hand Held Shield (MSH-06)", price: "$8,500", img: "https://www.mku.com/image/cache/catalog/SHIELDS/HARD%20SHIELD/HARD%20SHIELDS_MHS-02/HARD%20SHIELDS_MHS-02%20(2)-228x228.png" },
    { id: "Armor-Shld-Backpack", title: "Ballistic Backpack", price: "$20,000", img: "https://www.mku.com/image/cache/catalog/SHIELDS/SOFT%20SHIELD/MULTI%20PURPOSE%20SHIELD_SPS-FD-1A/MULTI%20PURPOSE%20SHIELD_SPS-FD-1A%20(4)-228x228.png" }
  ];


  const GearSection = ({ title, products }) => (
    <section className="py-20 px-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-widest uppercase font-[Quantico]">
          {title.split(' ')[0]} <span className="text-[#800000]">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#800000]/50 transition-all duration-500 shadow-2xl">
              <div className="relative h-64 overflow-hidden bg-[#111] p-4 flex items-center justify-center">
                {item.discount && <span className="absolute top-4 left-4 z-20 bg-[#800000] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{item.discount}</span>}
                {item.tag && <span className="absolute top-4 left-4 z-20 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">{item.tag}</span>}
                <img src={item.img} alt={item.title} className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-100 transition-opacity duration-300">
                  <button onClick={() => addToCart(item)} className="p-3 bg-white text-black rounded-full hover:!bg-[#800000] hover:text-white transition-all transform hover:scale-110"><ShoppingCart size={20} /></button>
                  <button className="p-3 bg-white text-black rounded-full hover:!bg-[#800000] hover:text-white transition-all transform hover:scale-110"><Maximize2 size={20} /></button>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[11px] font-bold text-gray-200 mb-3 tracking-widest uppercase h-10 flex items-center justify-center leading-tight font-[Quantico]">{item.title}</h3>
                <div className="flex flex-col items-center">
                  {item.oldPrice && <span className="text-gray-600 line-through text-[10px] mb-1 font-sans">{item.oldPrice}</span>}
                  <span className="text-[#800000] text-lg font-black font-sans">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico] pt-24 md:pt-32">
      <Navbar />

      {/* --- PROTECTIVE GEAR HERO --- */}
      <div className="relative h-[25vh] md:h-[40vh] mb-10 overflow-hidden border-b border-[#800000]/30 shadow-[0_10px_30px_rgba(128,0,0,0.1)]">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30 blur-[2px] scale-105" 
          style={{ backgroundImage: `url(${ProductsBanner})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="w-12 h-[2px] bg-[#800000] mb-4 animate-pulse" />
          <h1 className="text-3xl md:text-6xl font-black tracking-[0.5em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            PROTECTIVE <span className="text-[#800000]">GEAR</span>
          </h1>
          <p className="text-[10px] tracking-[0.8em] text-gray-500 mt-4 font-mono uppercase">
            Guardian_Foritude
          </p>
        </div>

        <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-[#800000]/50" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-[#800000]/50" />
      </div>

      {/* Floating Cart Launcher */}
     <button
  onClick={() => setIsCartOpen(true)}
  className="fixed bottom-8 right-8 z-50 bg-[#800000] p-4 rounded-full text-white shadow-[0_0_20px_rgba(128,0,0,0.5)] hover:scale-110 active:scale-95 transition-all"
>
  <ShoppingCart size={24} />

  {cart.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#800000]">
      {cart.length}
    </span>
  )}
</button>

      {/* Sections */}
      <GearSection title="HEAD GEAR" products={headGear} />
      <GearSection title="PLATES & CARRIERS" products={plateCarriers} />
      <GearSection title="BALLISTIC SHIELDS" products={shields} />

      
      <Footer />
    </div>
  );
};

export default ProtectiveGears;