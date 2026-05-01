const Finance = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Finance Module</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">Total Revenue</h2>
          <p className="text-2xl font-bold">₹1,20,000</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">Expenses</h2>
          <p className="text-2xl font-bold">₹45,000</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">Profit</h2>
          <p className="text-2xl font-bold">₹75,000</p>
        </div>
      </div>
    </div>
  );
};

export default Finance;