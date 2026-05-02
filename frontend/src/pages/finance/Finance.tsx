const Finance = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Finance Management</h1>
        <p className="text-slate-500 mt-1">Monitor revenue, expenses, and financial health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">Total Revenue</h2>
          <p className="text-3xl font-bold text-slate-900 mt-1">₹1,20,000</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">Expenses</h2>
          <p className="text-3xl font-bold text-slate-900 mt-1">₹45,000</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">Net Profit</h2>
          <p className="text-3xl font-bold text-emerald-600 mt-1">₹75,000</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[300px] flex items-center justify-center text-slate-400">
        Finance Analytics Chart Placeholder
      </div>
    </div>
  );
};

export default Finance;