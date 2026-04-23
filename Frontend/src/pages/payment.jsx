import React from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = async () => {
  try {
    console.log("CART DATA:", cart);
    const user = JSON.parse(localStorage.getItem("user"));

    const orderData = {
      userId: user?.id, // must exist
      paymentId: "REQ-" + Date.now(),

      products: cart.map(item => ({
  productId: item.id,
  quantity: 1,
  priceAtPurchase: Number(item.price.replace(/[^0-9]/g, ""))
})),

totalAmount: Number(getCartTotal())    };

    console.log("ORDER DATA:", orderData);

    const res = await axios.post(
      "http://localhost:5000/api/orders",
      orderData
    );

    console.log("SAVED:", res.data);

    clearCart();

    navigate("/orders");

  } catch (err) {
    console.error("ORDER FAILED:", err.response?.data || err);
  }
};

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-[#050505] p-10 border border-white/10 w-[400px]">

        <h2 className="text-2xl font-black mb-6">
          Secure Payment
        </h2>

        <p className="mb-4 text-zinc-400">
          Total Amount
        </p>

        <p className="text-3xl font-black mb-8">
          ${getCartTotal()}
        </p>

        <button
          onClick={handlePayment}
          className="w-full bg-white text-black py-4 font-black hover:bg-[#800000] hover:text-white transition-all"
        >
          CONFIRM REQUISITION
        </button>

      </div>

    </div>
  );
};

export default Payment;