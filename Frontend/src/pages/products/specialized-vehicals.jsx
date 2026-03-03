import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import { ShoppingCart, Maximize2, X, Trash2, ShieldCheck , RefreshCw, Circle, Megaphone, Gauge} from 'lucide-react';



const ProductsBanner = 'https://armour-works.com/images/banner.jpg';
const SpecializedVehicals = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const features = [
    {
      title: "360° Protection",
      desc: "Cabin is 360° protected with heavy duty ballistic material tested and approved by professionals to ensure your safety.",
      icon: <RefreshCw size={24} className="text-white" />
    },
    {
      title: "Embedded Gun Ports",
      desc: "Windows are provided with small openings designed to allow the firing of weapons while providing cover for the shooter.",
      icon: <Circle size={24} className="text-white" />
    },
    {
      title: "Intercom System",
      desc: "Real-time communication between occupants and external personnel, even in high-noise environments.",
      icon: <Megaphone size={24} className="text-white" />
    },
    {
      title: "Incredible Speed",
      desc: "These vehicles, although being heavier than normal, reach 0-60 in just 2.9 seconds thanks to the turbo engines.",
      icon: <Gauge size={24} className="text-white" />
    }
  ];

  // --- 1. LUXURY DATA ---
  const luxuryProducts = [
    { id: "Vehc-Lux-MercedesG6", title: "ARMORED Mercedes G63 AMG", oldPrice: "$740,000", price: "$629,000", discount: "15% OFF", img: "https://drive.google.com/file/d/1MdZXN_Y8YoEMJEkoEGPcdqZm4qHSXW_V/view?usp=sharing" },
    { id: "Vehc-Lux-RangeRover", title: "ARMORED Range Rover", price: "$490,500", img: "https://drive.google.com/file/d/1GamqgLEzEdFX7Ztu_vyyCHr8e0TF0PJg/view?usp=sharing" },
    { id: "Vehc-Lux-RollsRoycePhantom", title: "ARMORED Rolls Royce Phantom", price: "$900,000", tag: "NEW", img: "https://drive.google.com/file/d/1IfeFVxv4MuaPzqD8okVV6AcG-_D5O02Y/view?usp=sharing" },
    { id: "Vehc-Lux-S600Maybach", title: "ARMORED Mercedes S600 Maybach", price: "$450,000", img: "https://drive.google.com/file/d/1qKLxsaJEx-qDbPKrffp9eDPHzYN3c1hf/view?usp=sharing" },
    { id: "Vehc-Lux-ToyotaLandCruiser", title: "ARMORED Toyota Land Cruiser 300", price: "$350,000", img: "https://drive.google.com/file/d/1KpVLaImnUFcPOBZNlV1D26VtRrFdSsBz/view?usp=sharing" },
    { id: "Vehc-Lux-LexusLX-600", title: "ARMORED Lexus LX-600", price: "$450,000", img: "https://drive.google.com/file/d/1afBjRM7o0QovRXXeQ3lt8c4qxyeYOkgW/view?usp=sharing" },
    { id: "Vehc-Lux-ToyotaCamry", title: "ARMORED Toyota Camry", price: "$490,000", img: "https://drive.google.com/file/d/1b5kwMgHbp9qaecWPEo-_7v5vdS-wW5Vr/view?usp=sharing" },
    { id: "Vehc-Lux-CadillacEscalade", title: "ARMORED Cadillac Escalade", price: "$850,000", tag: "NEW", img: "https://drive.google.com/file/d/1r4bKrIW_tVRvP3p58dKv4utLj079jqGW/view?usp=drive_link" }
  ];

  // --- 2. TACTICAL DATA ---
  const tacticalProducts = [
    { id: "Vehc-Tac-SWATVehicle", title: "ARMORED SWAT Vehicle", oldPrice: "$540,000", price: "$459,000", discount: "15% OFF", img: "https://drive.google.com/file/d/11xDN7SUq-hLQypk_eRvGM7wiA685vU4D/view?usp=drive_link" },
    { id: "Vehc-Tac-6X6", title: "ARMORED 6X6", price: "$1,990,000", img: "https://drive.google.com/file/d/1ur610Auw7YqTf_BYMevIO5LebQzozYMR/view?usp=sharing" },
    { id: "Vehc-Tac-8SeaterPCV", title: "ARMORED 8 Seater PCV", price: "$990,000", img: "https://drive.google.com/file/d/1QADd-BOA12aUIq-rwIxZqJbpSRWSfNZw/view?usp=drive_link" },
    { id: "Vehc-Tac-12SeaterPCV", title: "ARMORED 12 Seater PCV", price: "$1,999,000", tag: "NEW", img: "https://drive.google.com/file/d/1QADd-BOA12aUIq-rwIxZqJbpSRWSfNZw/view?usp=drive_link" },
    { id: "Vehc-Tac-HUMMERAPC", title: "ARMORED HUMMER APC", oldPrice: "$1,909,000", price: "$1,622,650", discount: "15% OFF", img: "https://drive.google.com/file/d/1QADd-BOA12aUIq-rwIxZqJbpSRWSfNZw/view?usp=drive_link" },
    { id: "Vehc-Tac-10SeaterPCV", title: "ARMORED 10 Seater PCV", price: "$2,100,999", img: "https://aksumarmored.com/wp-content/uploads/2024/04/FS.webp" },
    { id: "Vehc-Tac-4SeaterPickup", title: "ARMORED 4 Seater Pickup", price: "$599,000", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Comabt-S.webp" },
    { id: "Vehc-Tac-2SeaterPickup", title: "ARMORED 2 Seater Pickup", price: "$250,000", tag: "NEW", img: "https://aksumarmored.com/wp-content/uploads/2024/04/GT.webp" }
  ];

  // --- 3. LIGHT ARMORED DATA ---
  const lightArmoredProducts = [
    { id: "Vehc-LAV-ToyotaHilux", title: "ARMORED Toyota Hilux", oldPrice: "$540,000", price: "$459,000", discount: "15% OFF", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-Toyota-Land-Cruiser-79-CIT-thumb.webp" },
    { id: "Vehc-LAV-GMCSavana", title: "ARMORED GMC Savana", price: "$1,990,000", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-GMC-Savana-CIT-thumb.webp" },
    { id: "Vehc-LAV-HiluxPickup", title: "ARMORED Hilux Pickup", price: "$990,000", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-Toyota-Hilux-Double-Cab-thumb.webp" },
    { id: "Vehc-LAV-ToyotaHiAce", title: "ARMORED Toyota HiAce", price: "$1,999,000", tag: "NEW", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-Toyota-Hiace-CIT-thumb.webp" },
    { id: "Vehc-LAV-MercedesActros", title: "ARMORED Mercedes Actros", oldPrice: "$1,909,000", price: "$1,622,650", discount: "15% OFF", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-Mercedes-Actros-thumb.webp" },
    { id: "Vehc-LAV-AshokLeyland", title: "ARMORED Ashok Leyland", price: "$2,100,999", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-Ashok-Leyland-Falcon-thumb.webp" },
    { id: "Vehc-LAV-HiAceBus", title: "ARMORED Hi Ace Bus", price: "$599,000", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-Toyota-Hiace-Commuter-thumb.webp" },
    { id: "Vehc-LAV-ToyotaCoaster", title: "ARMORED Toyota Coaster", price: "$250,000", tag: "NEW", img: "https://aksumarmored.com/wp-content/uploads/2024/04/Akusm-Armored-Vehicles-Toyota-Coaster-thumb.webp" }
  ];

  const getDirectLink = (url) => {
    try {
      if (!url.includes('drive.google.com')) return url;
      const id = url.split('/d/')[1]?.split('/')[0] || url.split('id=')[1]?.split('&')[0];
      return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
    } catch (e) { return url; }
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const ProductGrid = ({ title, products }) => (
    <section className="py-20 px-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-widest uppercase">
          {title.split(' ')[0]} <span className="text-[#800000]">{title.split(' ')[1]}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#800000]/50 transition-all duration-500 shadow-2xl">
              <div className="relative h-60 overflow-hidden bg-[#111]">
                {product.discount && <span className="absolute top-4 left-4 z-20 bg-[#800000] text-white text-[10px] font-bold px-3 py-1 rounded-full">{product.discount}</span>}
                {product.tag && <span className="absolute top-4 left-4 z-20 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">{product.tag}</span>}
                <img src={getDirectLink(product.img)} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => addToCart(product)} className="p-3 bg-white text-black rounded-full hover:!bg-[#800000] hover:text-white transition-all transform hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                  <button className="p-3 bg-white text-black rounded-full hover:!bg-[#800000] hover:text-white transition-all transform hover:scale-110">
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[11px] font-bold text-gray-200 mb-3 tracking-widest uppercase h-10 flex items-center justify-center leading-tight">{product.title}</h3>
                <div className="flex flex-col items-center">
                  {product.oldPrice && <span className="text-gray-600 line-through text-[10px] mb-1 font-sans">{product.oldPrice}</span>}
                  <span className="text-[#800000] text-lg font-black font-sans">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico]">
      <Navbar />

      {/* Header Banner */}
      <div className="relative h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] my-5 overflow-hidden border-y border-[#800000]/20">
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 blur-[2px]" style={{ backgroundImage: `url(${ProductsBanner})` }} />
        <div className="relative h-full w-full flex items-center justify-center text-3xl md:text-5xl font-black tracking-[0.4em] text-white/90">
          SPECIALIZED VEHICLES
        </div>
      </div>

      <section className="py-20 bg-black text-white font-[Quantico]">
      <Container>
        {/* Header Section */}
        <Row className="justify-content-center mb-16 text-center">
          <Col xs={12} md={10} lg={8}>
            <p className="text-gray-400 mb-4 text-xl md:text-2xl uppercase tracking-[0.2em]">
              Exceptional Features
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-5">
              STANDARD IN ALL <span className="text-[#800000]">VEHICLES</span>
            </h2>
            <hr className="w-24 mx-auto border-[#800000] border-2 opacity-100" />
          </Col>
        </Row>

        {/* Features Grid */}
        <Row className="gy-5 justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={11} sm={6} lg={3} className="text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center p-4 mb-6 rounded-sm border border-[#800000]/50 bg-[#0a0a0a] shadow-[0_0_15px_rgba(128,0,0,0.2)] group-hover:border-[#800000] transition-all">
                {feature.icon}
              </div>

              {/* Title */}
              <h4 className="mb-3 text-xl font-bold tracking-tight uppercase font-['Barlow']">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-md text-gray-500 font-light leading-relaxed font-sans">
                {feature.desc}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

      {/* Floating Cart Launcher */}
      <button onClick={() => setIsCartOpen(true)} className="fixed top-28 right-8 z-50 bg-[#800000] p-4 rounded-full text-white shadow-[0_0_20px_rgba(128,0,0,0.4)] hover:scale-110 active:scale-95 transition-all">
        <ShoppingCart size={24} />
        {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#800000]">{cart.length}</span>}
      </button>

      {/* Grid Sections */}
      <ProductGrid title="LUXURY SECTION" products={luxuryProducts} />
      <ProductGrid title="TACTICAL SECTION" products={tacticalProducts} />
      <ProductGrid title="LIGHT ARMORED" products={lightArmoredProducts} />

      {/* Tactical Sidebar */}
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
                    <img src={getDirectLink(item.img)} className="w-16 h-16 object-cover rounded-sm border border-white/10" alt="" />
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

export default SpecializedVehicals;