import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Wallet, 
  Users, 
  Package, 
  Briefcase, 
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Finance", path: "/finance", icon: Wallet },
  { name: "HR", path: "/hr", icon: Users },
  { name: "Inventory", path: "/inventory", icon: Package },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-40
        w-64 bg-slate-950 text-slate-300
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
        flex flex-col border-r border-slate-800
      `}>
        {/* Logo Section */}
        <div className="h-20 flex items-center px-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Amdox ERP</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-blue-600/10 text-blue-500 border border-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]' 
                  : 'hover:bg-slate-900 hover:text-white'}
              `}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* User / Logout Section */}
        <div className="p-4 border-t border-slate-800">
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
            onClick={() => console.log('Logout')}
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
