const Inventory = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Inventory Management</h1>
        <p className="text-slate-500 mt-1">Track stock levels, low items, and orders.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">Total Items</h2>
          <p className="text-3xl font-bold text-slate-900 mt-1">1,250</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">Low Stock</h2>
          <p className="text-3xl font-bold text-amber-600 mt-1">32</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">Out of Stock</h2>
          <p className="text-3xl font-bold text-rose-600 mt-1">8</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[300px] flex items-center justify-center text-slate-400">
        Inventory List Placeholder
      </div>
    </div>
  );
};

export default Inventory;