import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    preferredLanguage: "",
    chainOfCommand: "",
    sector: "",
    nature: "",
    armsLicense: "",
    address: ""
  });
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  // --- 1. THE DATA STREAM FUNCTION ---
  const fetchProfile = async () => {
    try {
      // Direct hit to Port 5000 with Timestamp to bypass 304 Cache
      const { data } = await axios.get(`http://localhost:5000/api/users/profile?t=${Date.now()}`, { 
        withCredentials: true 
      });

      console.log("📡 DATA_LINK_ESTABLISHED:", data);

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

  // --- 2. LIFECYCLE TRIGGER ---
  useEffect(() => {
    fetchProfile(); // CRITICAL: This triggers the fetch on page load
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      setFormData(data);
      setEditMode(false);
      setMessage("SUCCESS: PROFILE_ENCRYPTED_AND_STORED");
      setPrevPassword("");
      setNewPassword("");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "VERIFICATION_FAILED";
      setMessage(`ERROR: ${errorMsg.toUpperCase()}`);
    }
  };

  return (
    <div className="bg-black min-h-screen font-[Quantico] text-zinc-300">
      <Navbar />

      <main className="pt-28 pb-20 px-4 max-w-5xl mx-auto">
        {/* --- TACTICAL HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-red-900/50 pb-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-700 text-white text-[10px] px-2 py-0.5 rounded-sm animate-pulse">LIVE_SIGNAL</span>
              <span className="text-zinc-600 text-xs font-mono">UID: {userData._id?.slice(-8).toUpperCase()}</span>
            </div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
              {userData.name || "UNIDENTIFIED"} <span className="text-red-700">/</span> {userData.role || "OPERATOR"}
            </h1>
          </div>
          <button 
            type="button"
            onClick={() => {
                setEditMode(!editMode);
                if(editMode) setFormData(userData); 
            }}
            className={`mt-4 md:mt-0 px-6 py-2 border ${editMode ? 'border-zinc-500 text-zinc-500' : 'border-red-700 text-red-700'} uppercase text-[10px] font-bold hover:bg-red-700 hover:text-white transition-all tracking-widest`}
          >
            {editMode ? "Abort Changes" : "Modify Credentials"}
          </button>
        </div>

        {message && (
          <div className={`mb-6 p-3 font-mono text-[10px] border ${
            message.includes('ERROR') ? 'bg-red-950/20 border-red-500 text-red-500' : 'bg-green-950/20 border-green-500 text-green-500'
          }`}>
            {`> ${message}`}
          </div>
        )}

        <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="bg-zinc-900/40 border border-zinc-800 p-5">
              <h3 className="text-red-700 text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center">
                <i className="fa-solid fa-id-card mr-2"></i> Identity Matrix
              </h3>
              <div className="space-y-4">
                <DataField label="Full Name" name="name" value={formData.name} edit={editMode} onChange={handleChange} />
                <DataField label="Email Address" name="email" value={formData.email} edit={editMode} onChange={handleChange} />
                <DataField label="Contact Line" name="contact" value={formData.contact} edit={editMode} onChange={handleChange} />
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 p-5">
              <h3 className="text-red-700 text-[10px] font-bold tracking-widest uppercase mb-4 flex items-center">
                <i className="fa-solid fa-lock mr-2"></i> Security Protocol
              </h3>
              {editMode ? (
                <div className="space-y-4">
                  <input type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full bg-black border border-zinc-800 p-2 text-sm text-white outline-none focus:border-red-700" placeholder="New Key (Optional)" />
                  <input type="password" required value={prevPassword} onChange={(e) => setPrevPassword(e.target.value)} className="w-full bg-black border border-red-900/50 p-2 text-sm text-white outline-none focus:border-red-700" placeholder="Verify Current Key" />
                  <button type="submit" className="w-full bg-red-700 text-white text-[10px] font-bold py-3 uppercase tracking-widest">Commit Updates</button>
                </div>
              ) : (
                <p className="text-[10px] text-zinc-600 italic leading-relaxed text-center">Encryption active. Select "Modify Credentials" to unlock.</p>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-zinc-900/20 border border-zinc-800 p-6">
              <h3 className="text-red-700 text-[10px] font-bold tracking-widest uppercase mb-6 border-b border-zinc-800 pb-2">Operational Parameters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                <DataField label="Assigned Sector" name="sector" value={formData.sector} edit={editMode} onChange={handleChange} />
                <DataField label="Deployment Nature" name="nature" value={formData.nature} edit={editMode} onChange={handleChange} />
                <DataField label="Preferred Language" name="preferredLanguage" value={formData.preferredLanguage} edit={editMode} onChange={handleChange} />
                <DataField label="Chain of Command" name="chainOfCommand" value={formData.chainOfCommand} edit={editMode} onChange={handleChange} />
                <DataField label="Arms License No." name="armsLicense" value={formData.armsLicense} edit={editMode} onChange={handleChange} />
                <DataField label="Base Address" name="address" value={formData.address} edit={editMode} onChange={handleChange} />
              </div>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

const DataField = ({ label, name, value, edit, onChange }) => (
  <div className="flex flex-col">
    <label className="text-zinc-600 text-[10px] uppercase tracking-wider mb-1 font-bold">{label}</label>
    {edit ? (
      <input name={name} value={value || ""} onChange={onChange} className="bg-black border border-zinc-800 p-2 text-sm text-white focus:border-red-700 outline-none transition-all placeholder-zinc-700" />
    ) : (
      <p className="text-sm font-medium text-zinc-200 border-b border-zinc-800/30 py-1 uppercase">{value || "---"}</p>
    )}
  </div>
);

export default Profile;