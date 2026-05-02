const Inventory = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Module</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">Total Items</h2>
          <p className="text-2xl font-bold">1,250</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">Low Stock</h2>
          <p className="text-2xl font-bold">32</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-500">Out of Stock</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;