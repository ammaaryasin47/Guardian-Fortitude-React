import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const EmployeePanel = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/orders');
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
      await axios.put(`http://localhost:5000/api/orders/${orderId}`, { status: newStatus });
      setOrders(orders.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
    } catch (err) {
      alert("COMMAND_OVERRIDE_FAILED");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico] flex flex-col">
      <Navbar />
      <main className="flex-grow p-6 md:p-10 pt-32">
        <h2 className="text-3xl font-black tracking-tighter uppercase italic mb-10 border-b border-[#800000] pb-4">
          Logistics <span className="text-[#800000]">Command</span> Center
        </h2>

        <div className="bg-[#050505] border border-white/5 rounded-sm overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white/5 text-[#800000] text-[10px] tracking-[0.3em] uppercase">
                <th className="p-5 text-left">Manifest_ID</th>
                <th className="p-5 text-left">User_ID</th>
                <th className="p-5 text-center">Current_Status</th>
                <th className="p-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-white/5 transition-all">
                  <td className="p-5 font-mono text-xs text-zinc-400">
                    {order.paymentId.substring(0, 15)}...
                  </td>
                  <td className="p-5 font-mono text-xs text-zinc-500">
                    {order.userId?.substring(order.userId.length - 8).toUpperCase() || "GUEST"}
                  </td>
                  <td className="p-5 text-center">
                    <span className={`px-4 py-1 text-[9px] font-black rounded-sm border ${
                      order.status === 'Deployed' ? 'text-blue-400 border-blue-500/50' :
                      order.status === 'Processing' ? 'text-yellow-400 border-yellow-500/50' :
                      order.status === 'Delivered' ? 'text-green-400 border-green-500/50' :
                      'text-red-500 border-red-500/50'
                    }`}>
                      {order.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                      className="bg-black border border-white/20 text-zinc-300 text-[10px] uppercase px-3 py-2 outline-none focus:border-[#800000]"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
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
              NO_ACTIVE_REQUISITIONS
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeePanel;