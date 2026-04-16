import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on startup
  useEffect(() => {
    const savedCart = localStorage.getItem('guardian_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('guardian_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, cartId: Date.now() }]);
    setIsCartOpen(true); // Automatically open cart when item is added
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => {
  return cart.reduce((total, item) => {
    // If price is already a number, use it. If it's a string, strip the '$'
    const priceValue = typeof item.price === 'number' 
      ? item.price 
      : parseFloat(item.price.replace('$', ''));
    
    return total + (isNaN(priceValue) ? 0 : priceValue);
  }, 0).toFixed(2);
};

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, isCartOpen, setIsCartOpen, getCartTotal, clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);