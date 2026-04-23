import React from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, X, Trash2, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // 1. Close the sidebar for a clean transition
    setIsCartOpen(false);

    // 2. Navigate to the Requisition Manifest (Orders) page
    // The Orders.jsx component is already set up to read from your Global Cart Context
    navigate('/orders');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end bg-black/80 backdrop-blur-sm">
      {/* Click overlay to close */}
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />
      
      <div className="relative w-full max-w-md bg-[#050505] h-full border-l border-white/10 flex flex-col shadow-2xl font-[Quantico]">
        
        {/* --- SIDEBAR HEADER --- */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-xl font-black tracking-tighter flex items-center gap-2 text-white">
            <ShieldCheck className="text-[#800000]" size={20}/> DEPLOYMENT LOG
          </h3>
          <X className="cursor-pointer text-gray-500 hover:text-white" onClick={() => setIsCartOpen(false)} />
        </div>

        {/* --- CART ITEMS LIST --- */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-20 text-white">
              <ShoppingCart size={64}/>
              <p className="mt-4 font-black tracking-[0.3em]">LOG_EMPTY</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.cartId} className="flex gap-4 bg-[#0f0f0f] p-4 border border-white/5 group hover:border-white/10 transition-all">
                <img src={item.img} className="w-12 h-12 object-contain bg-white/5" alt={item.title} />
                <div className="flex-1">
                  <p className="text-[10px] text-white font-black uppercase mb-1 tracking-tighter">{item.title}</p>
                  <p className="text-xs font-bold text-[#800000] font-mono">{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.cartId)} 
                  className="text-zinc-600 hover:text-red-500 transition-colors"
                  title="Remove Asset"
                >
                  <Trash2 size={16}/>
                </button>
              </div>
            ))
          )}
        </div>

        {/* --- SIDEBAR FOOTER / CHECKOUT --- */}
        {cart.length > 0 && (
          <div className="p-8 bg-[#0a0a0a] border-t border-white/10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] text-gray-500 font-black tracking-widest">ESTIMATED REQUISITION COST</p>
                <div className="text-[8px] text-zinc-600 font-mono">SECURE_TRANSACTION_V4.2</div>
              </div>
              <p className="text-2xl font-black text-white tracking-tighter">${getCartTotal()}</p>
            </div>
            
            <button
  onClick={() => {
    setIsCartOpen(false);
    navigate("/payment");
  }}
  className="w-full bg-white text-black py-4 font-black tracking-[0.2em] text-xs hover:bg-[#800000] hover:text-white transition-all uppercase"
>
  PROCEED TO REQUISITION
</button>
            
           
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;