const HR = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">HR Module</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">Total Employees</h2>
          <p className="text-2xl font-bold">50</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">On Leave</h2>
          <p className="text-2xl font-bold">5</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">New Joinings</h2>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>
    </div>
  );
};

export default HR;