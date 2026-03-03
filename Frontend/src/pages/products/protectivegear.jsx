import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCart, Maximize2, X, Trash2, ShieldCheck } from 'lucide-react';

const ProtectiveGears = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
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

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

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
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <button onClick={() => setIsCartOpen(true)} className="fixed top-28 right-8 z-50 bg-[#800000] p-4 rounded-full text-white shadow-[0_0_20px_rgba(128,0,0,0.5)] hover:scale-110 active:scale-95 transition-all">
        <ShoppingCart size={24} />
        {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#800000]">{cart.length}</span>}
      </button>

      {/* Sections */}
      <GearSection title="HEAD GEAR" products={headGear} />
      <GearSection title="PLATES & CARRIERS" products={plateCarriers} />
      <GearSection title="BALLISTIC SHIELDS" products={shields} />

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/70 backdrop-blur-md transition-all">
          <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-md bg-[#050505] h-full border-l border-[#800000]/40 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.8)]">
            <div className="p-8 border-b border-white/5 bg-[#0a0a0a] flex justify-between items-center relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#800000]" />
              <div>
                <h3 className="text-xl font-black tracking-tighter flex items-center gap-2"><ShieldCheck className="text-[#800000]" /> DEPLOYMENT LIST</h3>
                <p className="text-[9px] text-gray-500 tracking-[0.2em] mt-1 uppercase">Ready for Authorization</p>
              </div>
              <X className="cursor-pointer hover:rotate-90 transition-transform text-gray-400 hover:text-white" onClick={() => setIsCartOpen(false)} />
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-10 italic">
                  <ShoppingCart size={64} className="mb-4" />
                  <p className="tracking-widest">EMPTY ASSET LOG</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex gap-4 bg-[#0f0f0f] p-4 rounded-sm border border-white/5 border-r-[#800000] border-r-4 hover:bg-[#141414] transition-all">
                    <img src={item.img} className="w-16 h-16 object-contain rounded-sm border border-white/10" alt="" />
                    <div className="flex-1">
                      <p className="text-[9px] text-[#800000] font-bold tracking-widest uppercase mb-1">UNIT_{item.id.split('-').pop()}</p>
                      <p className="text-[11px] font-bold text-white uppercase leading-tight mb-2">{item.title}</p>
                      <p className="text-xs font-black text-white/60">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(index)} className="text-gray-600 hover:text-red-500 transition-colors self-center"><Trash2 size={16} /></button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-[#0a0a0a] border-t border-white/5">
                <div className="flex justify-between items-end mb-6 font-sans">
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Est. Operational Cost</p>
                  <p className="text-2xl font-black text-[#800000] tracking-tighter">
                    ${cart.reduce((total, item) => total + parseInt(item.price.replace(/[^0-9]/g, '')), 0).toLocaleString()}
                  </p>
                </div>
                <button className="w-full bg-[#800000] text-white py-4 font-black tracking-[0.2em] text-xs hover:bg-[#a00000] transition-all border border-[#800000] active:scale-[0.98] uppercase">
                  INITIALIZE QUOTE PROTOCOL
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProtectiveGears;