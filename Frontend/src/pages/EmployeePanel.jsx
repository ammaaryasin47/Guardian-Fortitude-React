import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const EmployeePanel = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/orders");
      setOrders(data);
    } catch (err) {
      console.error("COMM_LINK_FAILURE", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${orderId}`, {
        status: newStatus,
      });

      setOrders((prev) =>
        prev.map((o) =>
          o._id === orderId ? { ...o, status: newStatus } : o
        )
      );
    } catch (err) {
      alert("COMMAND_OVERRIDE_FAILED");
    }
  };

  const statusStyle = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-900/20 text-yellow-400 border-yellow-500/50";
      case "In Transit":
        return "bg-cyan-900/20 text-cyan-400 border-cyan-500/50";
      case "Deployed":
        return "bg-blue-900/20 text-blue-400 border-blue-500/50";
      case "Delivered":
        return "bg-green-900/20 text-green-400 border-green-500/50";
      case "Cancelled":
        return "bg-red-900/20 text-red-500 border-red-500/50";
      default:
        return "bg-zinc-900/20 text-zinc-400 border-zinc-500/50";
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico] flex flex-col">
      <Navbar />

      <main className="flex-grow p-6 md:p-10 pt-32">

        <div className="flex justify-between items-center mb-10 border-b border-white pb-4">
          <h2 className="text-3xl font-black tracking-tighter uppercase italic">
            Logistics <span className="text-[#800000]">Command</span> Center
          </h2>

          <div className="text-[10px] text-zinc-500 font-mono hidden md:block">
            STATUS:{" "}
            <span className="text-green-500 animate-pulse underline">
              ENCRYPTED_STREAM_ACTIVE
            </span>
          </div>
        </div>

        <div className="bg-[#050505] border border-[#800000] rounded-sm overflow-hidden shadow-2xl">

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-white/5 text-white text-[10px] tracking-[0.3em] uppercase border-b border-white/10">
                <th className="p-5 text-left">Order_ID</th>
                <th className="p-5 text-left">Products</th>
                <th className="p-5 text-left">User_ID</th>
                <th className="p-5 text-center">Status</th>
                <th className="p-5 text-right">Command</th>
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

                  <td className="p-5 font-mono text-xs text-zinc-500">
                    {order.userId
                      ? order.userId.substring(order.userId.length - 8).toUpperCase()
                      : "GUEST"}
                  </td>

                  <td className="p-5 text-center">
                    <span
                      className={`px-4 py-1 text-[9px] font-black tracking-widest rounded-sm border ${statusStyle(
                        order.status
                      )}`}
                    >
                      {order.status?.toUpperCase() || "PENDING"}
                    </span>
                  </td>

                  <td className="p-5 text-right">
                    <select
                      value={order.status || "Pending"}
                      onChange={(e) =>
                        updateStatus(order._id, e.target.value)
                      }
                      className="bg-black border border-white/20 text-zinc-300 text-[10px] font-black uppercase px-3 py-2 outline-none focus:border-[#800000]"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="In Transit">In Transit</option>
                      <option value="Deployed">Deployed</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>

          {orders.length === 0 && (
            <div className="p-20 text-center text-zinc-600 italic tracking-[0.5em] text-xs">
              NO_ACTIVE_REQUISITIONS_FOUND
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmployeePanel;