import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ShoppingCart, ShieldAlert, Crosshair, Cpu, Activity, Zap } from 'lucide-react';

const UnmannedVehicles = () => {
  const [cart, setCart] = useState([]);

  const droneProducts = [
    {
      id: "MQ-28 GHOST BAT",
      title: "APEX PREDATOR V1",
      subtitle: "High-Altitude Reconnaissance",
      desc: "Engineered for stealth and endurance, the Apex Predator V1 provides 24-hour continuous surveillance with integrated thermal imaging and AI-target tracking.",
      price: "$125,000",
      img: "https://cdna.artstation.com/p/assets/images/images/061/545/848/large/sergey-koznov-mq28-cc-render-cc-00015.jpg?1681080690",
      stats: { range: "2500km", endurance: "24h", ceiling: "50k ft" }
    },
    {
      id: "MQ-9 REAPER",
      title: "TITAN GROUND UNIT",
      subtitle: "Autonomous Tactical Support",
      desc: "A rugged, unmanned ground vehicle designed to carry heavy payloads over extreme terrain. Features a modular top-rail for mounting communication arrays.",
      price: "$89,000",
      img: "https://cdna.artstation.com/p/assets/images/images/016/107/640/large/neakster-mq-9-1.jpg?1550926484",
      stats: { range: "500km", payload: "1.2 Tons", speed: "45mph" }
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-200 font-['Quantico',sans-serif] selection:bg-[#800000] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10 text-center space-y-4 px-4">
          <div className="flex items-center justify-center gap-3 text-[#800000] mb-2">
            <Activity size={16} className="animate-pulse" />
            <span className="text-xs tracking-[0.5em] font-mono uppercase opacity-70">Live_Asset_Feed</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
            UNMANNED <span className="text-[#800000] not-italic">ARSENAL</span>
          </h1>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 space-y-40">
        {droneProducts.map((product, index) => (
          <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
            
            {/* Visual Feed Side (Static 1360x524) */}
            <div className="w-full lg:w-2/3 group relative">
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[1360/524] overflow-hidden border border-white/10 bg-black shadow-[0_0_50px_rgba(0,0,0,1)]">
                {/* STATIC IMAGE - REPLACES PARALLAX */}
                <img 
                  src={product.img} 
                  alt={product.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100"
                />
                
                {/* HUD Overlays */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#800000]/50" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#800000]/50" />
                    
                    {/* Viewport Info */}
                    <div className="absolute top-4 left-6 font-mono text-[10px] text-[#800000] space-y-1 bg-black/40 p-2">
                      <p>RES: 1360 X 524</p>
                      <p>SOURCE: SECURE_UPLINK</p>
                    </div>

                    <div className="absolute bottom-6 right-6">
                       <Crosshair className="text-[#800000] opacity-80" size={30} />
                    </div>
                </div>
                
                {/* Scanning Bar Animation */}
                <div className="absolute inset-x-0 h-[2px] bg-[#800000]/50 shadow-[0_0_15px_#800000] animate-scan z-20 pointer-events-none" />
              </div>
              
              {/* Decorative ID Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[10px] tracking-widest text-gray-500">
                <span>MODEL: {product.id}</span>
                <span className="text-[#800000] animate-pulse">● ENCRYPTED CONNECTION</span>
              </div>
            </div>

            {/* Intel Side */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#800000]">
                    <Zap size={14} fill="currentColor" />
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Tactical Deployment</span>
                </div>
                <h2 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                    {product.title}
                </h2>
                <p className="text-[#800000] font-mono text-xs tracking-widest uppercase opacity-80">{product.subtitle}</p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-[#800000]" />
                <p className="text-gray-400 font-sans text-lg leading-relaxed pl-2">
                  {product.desc}
                </p>
              </div>

              {/* Technical Stats Card */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm grid grid-cols-3 gap-4">
                {Object.entries(product.stats).map(([key, val]) => (
                  <div key={key} className="text-center lg:text-left">
                    <p className="text-[9px] text-gray-500 uppercase font-mono">{key}</p>
                    <p className="text-xs font-bold text-white tracking-widest uppercase">{val}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                    <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">Est_Cost:</span>
                    <span className="text-4xl font-black text-white">{product.price}</span>
                </div>
                <button 
                  onClick={() => setCart([...cart, product])}
                  className="w-full bg-[#800000] hover:bg-white hover:!text-black text-white py-5 px-6 flex items-center justify-center gap-4 transition-all duration-300 group/btn"
                >
                  <ShoppingCart size={20} className="group-hover/btn:rotate-12 transition-transform" />
                  <span className="font-black uppercase tracking-[0.2em] text-sm">Initialize Acquisition</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default UnmannedVehicles;