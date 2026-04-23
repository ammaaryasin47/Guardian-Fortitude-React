import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { io } from "socket.io-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const { data } = await axios.get(
        `http://localhost:5000/api/orders/user/${user?.id}`
      );

      setOrders(data);
    } catch (err) {
      console.error("COMM_LINK_FAILURE", err);
    }
  };

  useEffect(() => {
  fetchOrders();   // ⭐ LOAD ORDERS WHEN PAGE OPENS

  const socket = io("http://localhost:5000");

  socket.on("orderUpdated", (updatedOrder) => {

    setOrders(prev =>
      prev.map(o =>
        o._id === updatedOrder._id ? updatedOrder : o
      )
    );

  });

  return () => socket.disconnect();

}, []);

  const statusStyle = (status) => {
    switch (status) {
      case "Processing":
        return "text-yellow-400 border-yellow-500/50";
      case "In Transit":
        return "text-cyan-400 border-cyan-500/50";
      case "Delivered":
        return "text-green-400 border-green-500/50";
      case "Cancelled":
        return "text-red-500 border-red-500/50";
      default:
        return "text-zinc-400 border-zinc-500/50";
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico] flex flex-col">
      <Navbar />

      <main className="flex-grow p-6 md:p-10 pt-32">
        <h2 className="text-3xl font-black tracking-tighter uppercase italic mb-10 border-b border-[#800000] pb-4">
          Your <span className="text-[#800000]">Orders</span>
        </h2>

        <div className="bg-[#050505] border border-white/5 rounded-sm overflow-hidden">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-white/5 text-[#800000] text-[10px] tracking-[0.3em] uppercase">
                <th className="p-5 text-left">Order_ID</th>
                <th className="p-5 text-left">Products</th>
                <th className="p-5 text-center">Total</th>
                <th className="p-5 text-center">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-white/5">

                  <td className="p-5 font-mono text-xs text-zinc-400">
                    {order.paymentId?.substring(0, 12)}
                  </td>

                  <td className="p-5 text-xs text-zinc-300">
                    {order.products?.map((p) => p.name).join(", ")}
                  </td>

                  <td className="p-5 text-center text-xs text-zinc-400">
                    ₹{order.totalAmount}
                  </td>

                  <td className="p-5 text-center">
                    <span
                      className={`px-4 py-1 text-[9px] font-black rounded-sm border ${statusStyle(
                        order.status
                      )}`}
                    >
                      {order.status?.toUpperCase() || "PENDING"}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <div className="p-20 text-center text-zinc-600 italic tracking-[0.5em] text-xs">
              NO_ORDERS_FOUND
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;