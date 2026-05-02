import { Bell, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl w-96 group focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
        <Search size={18} className="text-slate-400 group-focus-within:text-blue-500" />
        <input 
          type="text" 
          placeholder="Search something..." 
          className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 leading-none">Admin User</p>
            <p className="text-xs text-slate-500 mt-1">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-blue-600 cursor-pointer hover:scale-105 transition-transform">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
