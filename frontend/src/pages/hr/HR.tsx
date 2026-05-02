const HR = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">HR Management</h1>
        <p className="text-slate-500 mt-1">Manage employees, attendance, and recruitment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">Total Employees</h2>
          <p className="text-3xl font-bold text-slate-900 mt-1">50</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">On Leave</h2>
          <p className="text-3xl font-bold text-amber-600 mt-1">5</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-sm font-medium text-slate-500 uppercase">New Joinings</h2>
          <p className="text-3xl font-bold text-blue-600 mt-1">3</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[300px] flex items-center justify-center text-slate-400">
        Employee Directory Table Placeholder
      </div>
    </div>
  );
};

export default HR;