import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/adminsidebar.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedUser, setSelectedUser] = useState(null); 
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalAssets: 0,
    personnelCount: 0,
    activeOrders: 0,
    totalRevenue: 0,
    latestTransactions: [],
    loading: true
  });

  // --- REQUISITION DATA FROM SECURE_SERVER ---
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [statsRes, transRes] = await Promise.all([
          axios.get("http://localhost:5000/api/admin/stats"),
          axios.get("http://localhost:5000/api/admin/transactions")
        ]);

        setStats({
          totalAssets: statsRes.data.totalProducts || 0,
          personnelCount: statsRes.data.totalUsers || 0,
          activeOrders: statsRes.data.totalOrders || 0,
          totalRevenue: statsRes.data.revenue || 0,
          latestTransactions: transRes.data || [],
          loading: false
        });

        try {
          const usersRes = await axios.get("http://localhost:5000/api/users");
          setUsers(usersRes.data || []);
        } catch (userErr) {
          console.warn("USER_INTEL_FETCH_PENDING: Backend route not found yet.");
        }

      } catch (error) {
        console.error("DATA_LINK_FAILURE:", error.message);
        setStats(prev => ({ ...prev, loading: false }));
      }
    };
    fetchAdminData();
  }, []);

  const TacticalCard = ({ title, value, status, trend }) => (
    <div className="bg-[#0c0c0c] border border-maroon-900/20 p-5 relative overflow-hidden group hover:border-[#800000]/50 transition-all">
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#800000]/5 -mr-8 -mt-8 rotate-45 group-hover:bg-[#800000]/10 transition-all"></div>
      <h3 className="text-gray-500 text-[10px] tracking-[0.2em] font-['Quantico'] uppercase mb-2">
        // {title}
      </h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl text-white font-['Quantico'] font-bold">
          {stats.loading ? "---" : value}
        </span>
        <span className={`text-[10px] px-2 py-1 ${trend === 'up' ? 'text-green-500' : 'text-[#800000]'} bg-black border border-current uppercase font-black`}>
          {status}
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#050505] text-white font-['Quantico']">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-10 border-b border-maroon-900/20 pb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter uppercase italic">
              Operational Status: <span className="text-[#800000] animate-pulse">Active</span>
            </h2>
            <p className="text-xs text-gray-500 italic mt-1 font-sans">
              COMMAND_LEVEL: ROOT_ADMIN | SYSTEM_TIME: {new Date().toLocaleTimeString()}
            </p>
          </div>
          <button className="bg-[#800000] text-white px-6 py-2 text-[10px] font-black hover:bg-white hover:text-black transition-all tracking-[0.3em] uppercase">
            Deploy_Report_Log
          </button>
        </div>

        {activeTab === "dashboard" && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <TacticalCard title="Total Assets" value={stats.totalAssets.toLocaleString()} status="SYNC_COMPLETE" trend="up" />
              <TacticalCard title="Personnel Count" value={stats.personnelCount} status="STABLE" trend="up" />
              <TacticalCard title="Active Orders" value={stats.activeOrders} status="LIVE_FEED" trend="up" />
              <TacticalCard title="Total Revenue" value={`$${stats.totalRevenue.toLocaleString()}`} status="OPTIMAL" trend="up" />
            </div>

            <div className="bg-[#0c0c0c] border border-maroon-900/20 rounded-sm">
              <div className="p-4 border-b border-maroon-900/20 bg-white/5">
                <h4 className="text-[10px] tracking-[0.3em] text-[#800000] font-black uppercase">Latest_Transactions_Stream</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="text-gray-500 uppercase text-[9px] tracking-widest bg-black">
                    <tr>
                      <th className="p-4 border-b border-white/5 font-medium">Order_ID</th>
                      <th className="p-4 border-b border-white/5 font-medium">Subject</th>
                      <th className="p-4 border-b border-white/5 font-medium">Asset_Type</th>
                      <th className="p-4 border-b border-white/5 text-center">Status</th>
                      <th className="p-4 border-b border-white/5 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="font-sans">
                    {stats.latestTransactions.length > 0 ? (
                      stats.latestTransactions.map((tx, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4 text-maroon-500 font-['Quantico'] font-bold uppercase">#TX-{tx.id}</td>
                          <td className="p-4 text-white uppercase text-xs font-bold">{tx.userName}</td>
                          <td className="p-4 text-gray-400 italic text-xs uppercase">{tx.productName}</td>
                          <td className="p-4 text-center">
                            <span className="text-[9px] border border-green-500/50 text-green-500 px-2 py-0.5 rounded-sm uppercase font-black bg-green-500/5">
                              {tx.status || 'Deployed'}
                            </span>
                          </td>
                          <td className="p-4 text-white font-['Quantico'] font-bold text-right tracking-tighter">${tx.amount}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="p-20 text-center text-zinc-700 italic tracking-[0.5em] text-[10px]">
                          {stats.loading ? "INITIALIZING_DATABASE_LINK..." : "NO_TRANSACTIONS_FOUND_IN_SECTOR"}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "user intel" && (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
             {/* ... User mapping logic remains the same ... */}
             {users.map((user) => (
               <div key={user._id} className="border border-maroon-900/10 p-4 mb-2 bg-black">
                 {user.name} - {user.email}
               </div>
             ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;