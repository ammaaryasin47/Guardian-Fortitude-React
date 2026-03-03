import React from 'react';
import { LayoutDashboard, Users, CreditCard, Box, UserCheck, ShoppingCart, LogOut } from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'SITREP / DASHBOARD', icon: <LayoutDashboard size={20}/> },
    { id: 'users', label: 'USER INTEL', icon: <Users size={20}/> },
    { id: 'subscriptions', label: 'SUBSCRIPTIONS', icon: <CreditCard size={20}/> },
    { id: 'stock', label: 'INVENTORY / STOCK', icon: <Box size={20}/> },
    { id: 'employees', label: 'PERSONNEL', icon: <UserCheck size={20}/> },
    { id: 'orders', label: 'OPERATIONS / ORDERS', icon: <ShoppingCart size={20}/> },
  ];

  return (
    <div className="w-64 h-screen bg-black border-r border-maroon-900/30 flex flex-col font-['Quantico'] sticky top-0">
      <div className="p-6 border-b border-maroon-900/30">
        <h1 className="text-white text-xl font-bold tracking-tighter italic">
          COMMAND <span className="text-[#800000]">CENTER</span>
        </h1>
        <p className="text-[10px] text-gray-500 mt-1">SECURE ACCESS GRANTED</p>
      </div>
      
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-6 py-4 transition-all duration-300 group
              ${activeTab === item.id 
                ? 'bg-[#800000]/10 border-r-4 border-[#800000] text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <span className={`${activeTab === item.id ? 'text-[#800000]' : 'group-hover:text-[#800000]'} transition-colors`}>
              {item.icon}
            </span>
            <span className="ml-4 text-xs tracking-widest uppercase">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-maroon-900/30">
        <button className="flex items-center text-gray-500 hover:text-[#800000] transition-colors text-xs tracking-widest">
          <LogOut size={16} className="mr-2"/> TERMINATE SESSION
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;