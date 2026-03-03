import React, { useState } from "react";
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { ShoppingCart, Maximize2, ShieldCheck, X, Trash2 } from 'lucide-react';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const OpticsBanner = 'https://i.redd.it/y2487meii7n81.jpg';

const OpticsDepartment = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // --- 1. SCOPE DATA ---
  const scopes = [
    { id: "Optics-Scope-HolosunElite", title: "Holosun Elite", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/058/956/651/large/vladislav-kravchenko-5.jpg?1675317718" },
    { id: "Optics-Scope-M110k1", title: "M110k1", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/022/265/741/large/linus-scheffel-schmidt-benderoptic1.jpg?1574764917" },
    { id: "Optics-Scope-RedDot", title: "Red Dot", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/036/668/529/large/mustafa-majeed-3.jpg?1618306315" },
    { id: "Optics-Scope-LeupoldMarkIV", title: "Leupold Mark IV", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/044/501/097/large/nestor-sarmiento-prueba-main-camera-002.jpg?1640187426" },
    { id: "Optics-Scope-BushnellTRS25", title: "Bushnell TRS-25", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/074/822/599/large/stephen-mok-c-02-c-c-04-p05-vanity-wide.jpg?1713060893" },
    { id: "Optics-Scope-AimpointMicroT2", title: "Aimpoint Micro T2", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/076/165/283/large/dmytro-bushylov-pose-1.jpg?1716328861" },
    { id: "Optics-Scope-TrijiconACOG", title: "Trijicon ACOG", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/071/756/895/large/carlos-morales-empire-3d-std-acog-013.jpg?17058823063" },
    { id: "Optics-Scope-S9LPVO", title: "S9 LPVO", price: "$30,000", tag: "NEW", img: "https://cdna.artstation.com/p/assets/images/images/058/137/986/large/hector-cervantes-asset.jpg?1673466449" }
  ];

  // --- 2. NIGHT VISION DATA ---
  const nightVision = [
    { id: "Optics-NVG-PanoramicNVG", title: "Panoramic NVG", oldPrice: "$100,000", price: "$85,000", discount: "15% OFF", img: "https://cdna.artstation.com/p/assets/images/images/036/341/792/large/bucket-hex-tbrender001-shot-1-fullquality.jpg?1617390227" },
    { id: "Optics-NVG-Dual-Tube", title: "Dual-Tube NVG", price: "$60,000", img: "https://cdnb.artstation.com/p/assets/images/images/057/988/125/large/eldon-henrique-k.jpg?1673134831" },
    { id: "Optics-NVG-MonoTubeNVG", title: "Mono-Tube NVG", price: "$70,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/065/363/617/large/georgiy-kiselev-1pn138-render002-test-6.jpg?1690201799" },
    { id: "Optics-NVG-MinieWilcoxG29", title: "Minie Wilcox G29", price: "$70,000", img: "https://cdnb.artstation.com/p/assets/images/images/077/116/711/large/ilya-rukhlyada-1-viewport-019.jpg?1718642929" },
    { id: "Optics-NVG-WilcoxG29", title: "Wilcox G29", price: "$50,000", img: "https://cdna.artstation.com/p/assets/images/images/077/116/672/large/ilya-rukhlyada-1-viewport-012.jpg?1718642871" },
    { id: "Optics-NVG-FuturisticNVG", title: "Futuristic NVG", price: "$30,000", img: "https://cdnb.artstation.com/p/assets/images/images/011/362/481/large/nicholas-lim-helmet-composite.jpg?1529196400" },
    { id: "Optics-NVG-DualTubeWithMount", title: "Dual-Tube With Mount", price: "$55,000", img: "https://cdna.artstation.com/p/assets/images/images/070/409/944/large/antoine-george-explode-01.jpg?1702471561" }
  ];

  // --- 3. LASER DATA ---
  const lasers = [
    { id: "Optics-Laser-DBAL-D2", title: "DBAL-D2", price: "$30,000", tag: "NEW", img: "https://cdnb.artstation.com/p/assets/images/images/037/912/099/large/roman-kozak-shot-1.jpg?1621634549" },
    { id: "Optics-Laser-MAWL-C1", title: "MAWL-C1", oldPrice: "$85,000", price: "$70,000", discount: "20% OFF", img: "https://cdna.artstation.com/p/assets/images/images/037/383/280/large/benedict-burns-perst-4-artstation-presentation-3.jpg?1620232422" },
    { id: "Optics-Laser-PEQ-15", title: "PEQ-15", price: "$40,000", img: "https://cdna.artstation.com/p/assets/images/images/043/925/382/large/wenwen-ar15keys-4-17.jpg?1638633290" },
    { id: "Optics-Laser-LA5", title: "LA5", price: "$60,000", img: "https://cdnb.artstation.com/p/assets/images/images/015/471/275/large/anton-pismennyy-anton-pismennyy-lcu-13.jpg?1548454625" }
  ];

  // --- HANDLERS ---
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleExpand = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // --- SUB-COMPONENT: PRODUCT GRID ---
  const ProductGrid = ({ title, products }) => (
    <section className="py-20 px-4 border-b border-white/5">
      <Container className="max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-widest uppercase">
          <span className="text-[#3a9768]"></span>
        </h2>
        <Row className="gy-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={3}>
              <div className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#3a9768]/50 transition-all duration-500 shadow-2xl h-full flex flex-col">
                <div className="relative h-64 overflow-hidden bg-[#111]">
                  {product.discount && <span className="absolute top-4 left-4 z-20 bg-[#3a9768] text-white text-[10px] font-bold px-3 py-1 rounded-full">{product.discount}</span>}
                  {product.tag && <span className="absolute top-4 left-4 z-20 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">{product.tag}</span>}
                  
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => addToCart(product)} className="p-3 bg-white text-black rounded-full hover:!bg-[#3a9768] hover:text-white transition-all transform hover:scale-110">
                      <ShoppingCart size={20} />
                    </button>
                    <button onClick={() => handleExpand(product)} className="p-3 bg-white text-black rounded-full hover:!bg-[#3a9768] hover:text-white transition-all transform hover:scale-110">
                      <Maximize2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center mt-auto">
                  <h3 className="text-[11px] font-bold text-gray-200 mb-3 tracking-widest uppercase h-10 flex items-center justify-center leading-tight">
                    {product.title}
                  </h3>
                  <div className="flex flex-col items-center">
                    {product.oldPrice && <span className="text-gray-600 line-through text-[10px] mb-1 font-sans">{product.oldPrice}</span>}
                    <span className="text-[#3a9768] text-lg font-black font-sans">{product.price}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico]">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[40vh] my-5 overflow-hidden border-y border-[#3a9768]/20">
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 blur-[1px]" style={{ backgroundImage: `url(${OpticsBanner})` }} />
        <div className="relative h-full w-full flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-black tracking-[0.5em] text-white/90">
            OPT<span className="text-[#3a9768]">ICS</span>
          </h1>
        </div>
      </div>

      {/* Floating Cart Launcher */}
      <button onClick={() => setIsCartOpen(true)} className="fixed top-28 right-8 z-50 bg-[#3a9768] p-4 rounded-full text-white shadow-[0_0_20px_rgba(58,151,104,0.4)] hover:scale-110 transition-all">
        <ShoppingCart size={24} />
        {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#3a9768]">{cart.length}</span>}
      </button>

      {/* Product Sections */}
      <ProductGrid title="PRECISION SCOPES" products={scopes} />
      <ProductGrid title="NIGHT VISION" products={nightVision} />
      <ProductGrid title="LASER SYSTEMS" products={lasers} />

      {/* Expand Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered contentClassName="bg-[#0a0a0a] border border-white/10 rounded-none">
        <Modal.Header className="border-b border-white/5 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#3a9768]" size={20}/>
            <span className="text-[9px] tracking-[0.3em] font-black uppercase text-gray-400">UNIT_AUTH_REQUIRED</span>
          </div>
          <X className="cursor-pointer text-gray-500 hover:text-white" onClick={() => setShowModal(false)} />
        </Modal.Header>
        <Modal.Body className="p-0">
          <img src={selectedProduct?.img} className="w-full h-80 object-cover" alt="" />
          <div className="p-8 text-center bg-gradient-to-t from-black to-transparent">
            <h2 className="text-2xl font-black mb-2 tracking-tighter uppercase">{selectedProduct?.title}</h2>
            <p className="text-[#3a9768] text-3xl font-black font-sans mb-6">{selectedProduct?.price}</p>
            <button 
                onClick={() => { addToCart(selectedProduct); setShowModal(false); }}
                className="w-full bg-[#3a9768] text-white py-4 font-black tracking-widest text-xs hover:bg-[#48b881] transition-all border border-white/10"
            >
              INITIALIZE LOGISTICS ACQUISITION
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/70 backdrop-blur-sm transition-all">
          <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-md bg-[#050505] h-full border-l border-[#3a9768]/40 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.8)]">
            <div className="p-8 border-b border-white/5 bg-[#0a0a0a] flex justify-between items-center">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3a9768]" />
              <div>
                <h3 className="text-xl font-black tracking-tighter flex items-center gap-2"><ShieldCheck className="text-[#3a9768]" /> ASSET LOG</h3>
                <p className="text-[9px] text-gray-500 tracking-[0.2em] mt-1 uppercase">Optics Department</p>
              </div>
              <X className="cursor-pointer hover:rotate-90 transition-transform text-gray-400" onClick={() => setIsCartOpen(false)} />
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-10">
                  <ShoppingCart size={64} className="mb-4" />
                  <p className="tracking-widest">NO ASSETS DETECTED</p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex gap-4 bg-[#0f0f0f] p-4 rounded-sm border border-white/5 border-r-[#3a9768] border-r-4">
                    <img src={item.img} className="w-16 h-16 object-cover rounded-sm" alt="" />
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-white uppercase">{item.title}</p>
                      <p className="text-xs font-black text-[#3a9768]">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(index)} className="text-gray-600 hover:text-red-500 transition-colors self-center"><Trash2 size={16} /></button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-[#0a0a0a] border-t border-white/5">
                <div className="flex justify-between items-end mb-6">
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Total Department Requisition</p>
                  <p className="text-2xl font-black text-[#3a9768] tracking-tighter">
                    ${cart.reduce((total, item) => total + parseInt(item.price.replace(/[^0-9]/g, '')), 0).toLocaleString()}
                  </p>
                </div>
                <button className="w-full bg-[#3a9768] text-white py-4 font-black tracking-[0.2em] text-xs hover:bg-[#48b881] transition-all uppercase">
                  CONFIRM ACQUISITION
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

export default OpticsDepartment;