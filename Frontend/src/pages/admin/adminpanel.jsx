import React, { useState } from "react";
import AdminSidebar from "../../components/adminsidebar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Tactical Card Wrapper
  const TacticalCard = ({ title, value, status, trend }) => (
    <div className="bg-[#0c0c0c] border border-maroon-900/20 p-5 relative overflow-hidden group hover:border-[#800000]/50 transition-all">
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#800000]/5 -mr-8 -mt-8 rotate-45 group-hover:bg-[#800000]/10 transition-all"></div>
      <h3 className="text-gray-500 text-[10px] tracking-[0.2em] font-['Quantico'] uppercase mb-2">
        // {title}
      </h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl text-white font-['Quantico'] font-bold">{value}</span>
        <span className={`text-[10px] px-2 py-1 ${trend === 'up' ? 'text-green-500' : 'text-[#800000]'} bg-black border border-current`}>
          {status}
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#050505] text-white font-['Quantico']">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10 border-b border-maroon-900/20 pb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter uppercase">
              Operational Status: <span className="text-[#800000]">Active</span>
            </h2>
            <p className="text-xs text-gray-500 italic mt-1 font-sans">User ID: Admin_Root_01 | System Time: {new Date().toLocaleTimeString()}</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#800000] text-white px-4 py-2 text-xs hover:bg-[#a00000] transition-all tracking-widest">
              DEPLOY REPORT
            </button>
          </div>
        </div>

        {/* Dynamic Content Switching */}
        {activeTab === "dashboard" && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <TacticalCard title="Total Assets Sold" value="1,284" status="+12% LVL" trend="up" />
              <TacticalCard title="Personnel Count" value="45" status="STABLE" trend="up" />
              <TacticalCard title="Active Subscriptions" value="892" status="-2% ALERT" trend="down" />
              <TacticalCard title="Total Revenue" value="$420,500" status="OPTIMAL" trend="up" />
            </div>

            {/* Tactical Data Table */}
            <div className="bg-[#0c0c0c] border border-maroon-900/20">
              <div className="p-4 border-b border-maroon-900/20 bg-maroon-900/5">
                <h4 className="text-xs tracking-[0.3em] text-[#800000]">LATEST TRANSACTIONS_</h4>
              </div>
              <table className="w-full text-left text-sm border-collapse">
                <thead className="text-gray-500 uppercase text-[10px] tracking-widest bg-black">
                  <tr>
                    <th className="p-4 border-b border-maroon-900/20 font-medium">Order_ID</th>
                    <th className="p-4 border-b border-maroon-900/20 font-medium">Subject</th>
                    <th className="p-4 border-b border-maroon-900/20 font-medium">Asset_Type</th>
                    <th className="p-4 border-b border-maroon-900/20 font-medium">Status</th>
                    <th className="p-4 border-b border-maroon-900/20 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="font-sans">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="border-b border-maroon-900/10 hover:bg-white/5 transition-colors group">
                      <td className="p-4 text-maroon-500 font-['Quantico']">#TX-00{item}92</td>
                      <td className="p-4 text-white">Subject_Delta_{item}</td>
                      <td className="p-4 text-gray-400">Tactical Gear</td>
                      <td className="p-4">
                        <span className="text-[10px] border border-green-500/50 text-green-500 px-2 py-0.5 rounded-full uppercase">Deployed</span>
                      </td>
                      <td className="p-4 text-white font-['Quantico'] font-bold">$1,200.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab !== "dashboard" && (
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-maroon-900/20 opacity-50">
            <p className="font-['Quantico'] text-maroon-500">INITIALIZING {activeTab.toUpperCase()} MODULE...</p>
            <div className="w-48 h-1 bg-maroon-900/20 mt-4 relative overflow-hidden">
               <div className="absolute inset-0 bg-[#800000] animate-[shimmer_2s_infinite] w-1/2"></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;