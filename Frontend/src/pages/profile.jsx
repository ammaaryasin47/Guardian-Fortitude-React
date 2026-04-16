import React, { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserOrderHistory = ({ userId }) => {
  const [myOrders, setMyOrders] = useState([]);

 useEffect(() => {
    if (!userId) return;
    const fetchMyOrders = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/orders/user/${userId}`);
        setMyOrders(data);
      } catch (err) {
        console.error("Order Fetch Failure", err);
      }
    };
    fetchMyOrders();
  }, [userId]);
  
  return (
    <div className="mt-8 bg-zinc-900/10 border border-zinc-800/50 rounded-sm overflow-hidden shadow-2xl">
      <div className="bg-zinc-800/30 p-4 border-b border-zinc-800 flex justify-between items-center">
        <h3 className="text-red-700 text-[11px] font-black tracking-[0.3em] uppercase italic">Deployment_Logs</h3>
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            <span className="text-[8px] text-zinc-500 font-mono tracking-widest">LIVE_FEED_ACTIVE</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 text-zinc-500 text-[9px] uppercase tracking-widest border-b border-zinc-800">
              <th className="p-4 font-black">Product_ID</th>
              <th className="p-4 font-black text-center">Current_Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {myOrders.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-10 text-center text-xs text-zinc-600 italic uppercase tracking-widest">
                  No active data streams detected.
                </td>
              </tr>
            ) : (
              myOrders.map(order => (
                <tr key={order._id} className="hover:bg-red-900/5 transition-colors group">
                  <td className="p-4">
                    {/* Displaying first product ID or 'Multiple' */}
                    <p className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                      {order.products?.[0]?.productId?.toUpperCase() || "N/A"}
                      {order.products?.length > 1 && <span className="text-red-700 ml-1">[+]</span>}
                    </p>
                  </td>
                  <td className="p-4 text-center">
                    <p className="text-[10px] font-mono text-zinc-500">
                      {order.userId?.slice(-8).toUpperCase() || "GUEST"}
                    </p>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-600 shadow-[0_0_8px_rgba(22,163,74,0.8)]' : 'bg-yellow-600 animate-pulse shadow-[0_0_8px_rgba(202,138,4,0.8)]'}`}></span>
                      <span className="text-[10px] font-bold text-zinc-300 tracking-tighter uppercase">{order.status}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                       onClick={() => alert(`Tracking REQ: ${order._id}`)}
                       className="text-[9px] font-black text-zinc-500 hover:text-red-700 uppercase tracking-widest border border-zinc-800 px-3 py-1 hover:border-red-700 transition-all bg-black"
                    >
                      Inspect_Log
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", contact: "", preferredLanguage: "",
    chainOfCommand: "", sector: "", nature: "", armsLicense: "", address: ""
  });
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/users/profile?t=${Date.now()}`, { 
        withCredentials: true 
      });
      setUserData(data);
      setFormData({
        name: data.name || "",
        email: data.email || "",
        contact: data.contact || "",
        preferredLanguage: data.preferredLanguage || "",
        chainOfCommand: data.chainOfCommand || "",
        sector: data.sector || "",
        nature: data.nature || "",
        armsLicense: data.armsLicense || "",
        address: data.address || ""
      }); 
    } catch (error) {
      console.error("❌ COMM_LINK_FAILURE:", error);
      setMessage("ERROR: DATA_SYNC_INTERRUPTED");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage(""); 
    try {
      const { data } = await axios.put(
        "http://localhost:5000/api/users/profile", 
        { ...formData, prevPassword, newPassword }, 
        { withCredentials: true }
      );
      setUserData(data);
      setEditMode(false);
      setMessage("SUCCESS: PROFILE_ENCRYPTED_AND_STORED");
      setPrevPassword("");
      setNewPassword("");
    } catch (error) {
      setMessage(`ERROR: ${error.response?.data?.message?.toUpperCase() || "VERIFICATION_FAILED"}`);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-zinc-300 flex flex-col box-border">
      {/* Ensuring Navbar is on top */}
     <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
        <Navbar />
      </header>
      
      <main className="flex-grow mt-32 mb-20 px-6 max-w-7xl mx-auto w-full">
        
        {/* --- TACTICAL HEADER --- */}
        <div className="relative mb-12 p-8 bg-zinc-900/20 border-l-4 border-red-700 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none select-none">
            <h1 className="text-[8rem] font-black leading-none">GFSS</h1>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-2 bg-red-950/40 border border-red-700/50 text-red-500 text-[9px] px-3 py-1 font-black tracking-widest animate-pulse">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> LIVE_OPERATOR
              </span>
              <span className="text-zinc-600 text-[10px] font-mono tracking-tighter">
                SESSION_UUID: {userData._id?.toUpperCase() || "PENDING"}
              </span>
            </div>
            <h1 className="text-5xl font-black text-white uppercase tracking-tighter italic">
              {userData.name || "UNIDENTIFIED"} 
              <span className="text-red-700 mx-2 text-3xl">/</span> 
              <span className="text-zinc-500 text-3xl">{userData.role?.toUpperCase() || "OPERATOR"}</span>
            </h1>
          </div>

          {/* --- ACTION TERMINAL --- */}
          {/* --- ACTION TERMINAL --- */}
<div className="relative z-10 flex flex-wrap gap-4 w-full xl:w-auto">
  
  {/* ADMIN COMMAND - High Alert Red Glow */}
  {userData.role === 'admin' && (
    <button 
      onClick={() => navigate('/admin/adminpanel')} 
      className="group relative flex-1 xl:flex-none px-6 py-3 overflow-hidden bg-transparent border border-red-600 transition-all hover:bg-red-600"
    >
      <div className="absolute inset-0 w-3 bg-red-600 transition-all group-hover:w-full -z-10"></div>
      <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-500 group-hover:text-black transition-colors">
        <i className="fa-solid fa-screwdriver-wrench"></i> Admin_Console
      </span>
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-40"></div>
    </button>
  )}

  {/* LOGISTICS COMMAND - Specialized Blue HUD */}
  {userData.role === 'employee' && (
    <button 
      onClick={() => navigate('/employeepanel')} 
      className="group relative flex-1 xl:flex-none px-6 py-3 border border-blue-500 bg-blue-900/10 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
    >
      <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 group-hover:text-white">
        <i className="fa-solid fa-truck-ramp-box"></i> Logistics_Hub
      </span>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
    </button>
  )}

  {/* TACTICAL CART - Clean White/Black Swap */}
  <button 
    onClick={() => navigate('/orders')} 
    className="group relative flex-1 xl:flex-none px-6 py-3 bg-white border border-white transition-all hover:bg-transparent"
  >
    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-black group-hover:text-white transition-colors">
      <i className="fa-solid fa-cart-shopping"></i> Cart
    </span>
  </button>

  {/* MODIFY MATRIX - Double Border Style */}
  <button 
    onClick={() => setEditMode(!editMode)} 
    className={`flex-1 xl:flex-none px-6 py-3 border-2 uppercase text-[10px] font-black tracking-[0.2em] transition-all
      ${editMode 
        ? 'border-zinc-500 text-zinc-500 animate-pulse' 
        : 'border-red-700 text-red-700 hover:bg-red-700 hover:text-white shadow-[inset_0_0_0_1px_rgba(128,0,0,0.5)]'
      }`}
  >
    {editMode ? "[ ABORT_OVERRIDE ]" : "Modify_Matrix"}
  </button>

  {/* TERMINATE SESSION - Industrial Icon Button */}
  <button 
    onClick={handleLogout} 
    className="px-5 py-3 border border-zinc-800 text-zinc-600 hover:border-red-600 hover:text-red-600 hover:bg-red-600/10 transition-all flex items-center justify-center shadow-inner"
    title="Terminate Session"
  >
    <i className="fa-solid fa-power-off text-lg"></i>
  </button>
</div>
        </div>

        {message && (
          <div className={`mb-8 p-4 font-mono text-xs border-l-2 flex justify-between items-center ${message.includes('ERROR') ? 'bg-red-950/20 border-red-500 text-red-500' : 'bg-green-950/20 border-green-500 text-green-500'}`}>
            <span>{`> ${message}`}</span>
            <span className="animate-pulse">_</span>
          </div>
        )}

        <form onSubmit={submitHandler} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-sm shadow-xl">
              <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-2">
                <i className="fa-solid fa-id-card text-red-700 text-xs"></i>
                <h3 className="text-red-700 text-[11px] font-black tracking-[0.3em] uppercase">Identity_Encryption</h3>
              </div>
              <div className="space-y-6">
                <DataField label="Personnel Name" name="name" value={formData.name} edit={editMode} onChange={handleChange} />
                <DataField label="Comms Channel" name="email" value={formData.email} edit={editMode} onChange={handleChange} />
                <DataField label="Secure Line" name="contact" value={formData.contact} edit={editMode} onChange={handleChange} />
              </div>
              {editMode && (
                <div className="mt-8 pt-8 border-t border-zinc-800 space-y-6 animate-fade-in">
                  <div className="flex flex-col">
                    <label className="text-zinc-600 text-[9px] uppercase font-black mb-1 tracking-widest">Authorization_Token</label>
                    <input type="password" value={prevPassword} onChange={(e) => setPrevPassword(e.target.value)} className="bg-black border border-zinc-800 p-3 text-sm focus:border-red-700 outline-none transition-all" placeholder="OLD_PASS" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-zinc-600 text-[9px] uppercase font-black mb-1 tracking-widest">New_Access_Key</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="bg-black border border-zinc-800 p-3 text-sm focus:border-red-700 outline-none transition-all" placeholder="NEW_PASS" />
                  </div>
                  <button type="submit" className="w-full bg-[#800000] py-3 text-[10px] font-black tracking-[0.3em] hover:bg-red-600 transition-all mt-4">UPLOAD_CHANGES</button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="bg-zinc-900/10 border border-zinc-800 p-8 rounded-sm relative shadow-xl">
              <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-2">
                <i className="fa-solid fa-microchip text-red-700 text-xs"></i>
                <h3 className="text-red-700 text-[11px] font-black tracking-[0.3em] uppercase">System_Parameters</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <DataField label="Assigned Sector" name="sector" value={formData.sector} edit={editMode} onChange={handleChange} />
                <DataField label="Deployment Nature" name="nature" value={formData.nature} edit={editMode} onChange={handleChange} />
                <DataField label="Sync Language" name="preferredLanguage" value={formData.preferredLanguage} edit={editMode} onChange={handleChange} />
                <DataField label="Protocol" name="chainOfCommand" value={formData.chainOfCommand} edit={editMode} onChange={handleChange} />
                <DataField label="License Auth" name="armsLicense" value={formData.armsLicense} edit={editMode} onChange={handleChange} />
                <DataField label="Extraction Point" name="address" value={formData.address} edit={editMode} onChange={handleChange} />
              </div>
            </div>
            
            {/* TACTICAL TABLE LOGS */}
            {userData._id && <UserOrderHistory userId={userData._id} />}
          </div>
        </form>
      </main>

      <footer style={{ width: '100%', zIndex: 9999, backgroundColor: '#000' }}>
        <Footer />
      </footer>
    </div>
  );
};

const DataField = ({ label, name, value, edit, onChange }) => (
  <div className="flex flex-col group">
    <label className="text-zinc-600 text-[9px] uppercase font-black tracking-widest mb-1 transition-colors group-hover:text-red-700 italic">
      {label}
    </label>
    {edit ? (
      <input 
        name={name} 
        value={value || ""} 
        onChange={onChange} 
        className="bg-black border border-zinc-800 p-3 text-sm text-white focus:border-red-700 outline-none transition-all placeholder-zinc-800 font-mono" 
      />
    ) : (
      <p className="text-sm font-bold text-zinc-100 py-2 uppercase tracking-wide border-b border-transparent hover:border-red-900/50 transition-all cursor-default">
        {value || "---"}
      </p>
    )}
  </div>
);

export default Profile;