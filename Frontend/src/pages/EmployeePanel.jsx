import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const EmployeePanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/orders');
        setOrders(data);
      } catch (err) {
        console.error("COMM_LINK_FAILURE: Could not fetch logistics data", err);
      }
    };
    fetchOrders();
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${orderId}`, { status: newStatus });
      // Update local state to reflect the change immediately
      setOrders(orders.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
    } catch (err) {
      alert("COMMAND_OVERRIDE_FAILED: Unauthorized or Server Error");
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
            STATUS: <span className="text-green-500 animate-pulse underline">ENCRYPTED_STREAM_ACTIVE</span>
          </div>
        </div>

        <div className="bg-[#050505] border border-[#800000] rounded-sm overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/5 text-white text-[10px] tracking-[0.3em] uppercase border-b border-white/10">
                  <th className="p-5 text-left">Product_ID</th>
                  <th className="p-5 text-left">User_ID</th>
                  <th className="p-5 text-center">Current_Status</th>
                  <th className="p-5 text-right">Deployment_Command</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {orders.map((order) => (
                  <tr key={order._id} className="hover:bg-white/5 transition-all group">
                    {/* PRODUCT_ID COLUMN */}
                    <td className="p-5 font-mono text-xs text-zinc-400 group-hover:text-white transition-colors">
                      {order.products && order.products.length > 0 ? (
                        <span>
                          {order.products[0].productId?.substring(0, 12).toUpperCase()}
                          {order.products.length > 1 && (
                            <span className="text-[#800000] ml-2 text-[10px] italic">
                              (+{order.products.length - 1} MORE)
                            </span>
                          )}
                        </span>
                      ) : (
                        "NO_ITEMS"
                      )}
                    </td>

                    {/* USER_ID COLUMN */}
                    <td className="p-5 font-mono text-xs text-zinc-500">
                      {order.userId ? order.userId.substring(order.userId.length - 8).toUpperCase() : "GUEST"}
                    </td>

                    {/* CURRENT STATUS COLUMN */}
                    <td className="p-5 text-center">
                      <span className={`px-4 py-1 text-[9px] font-black tracking-widest rounded-sm border ${
                        order.status === 'Deployed' ? 'bg-blue-900/20 text-blue-400 border-blue-500/50' :
                        order.status === 'Cancelled' ? 'bg-red-900/20 text-red-500 border-red-500/50' :
                        order.status === 'In Transit' ? 'bg-cyan-900/20 text-cyan-400 border-cyan-500/50' :
                        'bg-yellow-900/20 text-yellow-400 border-yellow-500/50'
                      }`}>
                        {order.status?.toUpperCase() || "PENDING"}
                      </span>
                    </td>

                    {/* COMMAND DROPDOWN COLUMN */}
                    <td className="p-5 text-right">
                      <select
                        value={order.status}
                        onChange={(e) => updateStatus(order._id, e.target.value)}
                        className="bg-black border border-white/20 text-zinc-300 text-[10px] font-black uppercase px-3 py-2 outline-none focus:border-[#800000] cursor-pointer hover:bg-white hover:text-black transition-all rounded-none"
                      >
                        <option value="Pending">Set: Pending</option>
                        <option value="In Transit">Set: In Transit</option>
                        <option value="Deployed">Set: Deployed</option>
                        <option value="Delivered">Set: Delivered</option>
                        <option value="Cancelled">Set: Cancelled</option>
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmployeePanel;