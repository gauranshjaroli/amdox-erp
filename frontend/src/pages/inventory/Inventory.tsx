import { useState } from "react";
import { motion } from "framer-motion";

const dummyData = [
  { id: 1, name: "Item A", sku: "SKU001", stock: 120, price: 500 },
  { id: 2, name: "Item B", sku: "SKU002", stock: 45, price: 1200 },
  { id: 3, name: "Item C", sku: "SKU003", stock: 0, price: 300 },
];

export default function Inventory() {
  const [search, setSearch] = useState("");

  const filtered = dummyData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Inventory</h1>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          placeholder="Search items..."
          className="input w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="btn">+ Add Item</button>
      </div>

      {/* Table */}
      <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-slate-800 text-gray-300">
            <tr>
              <th className="p-4">Item</th>
              <th className="p-4">SKU</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-slate-800 hover:bg-slate-800 transition"
              >
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.sku}</td>

                <td className="p-4">
                  {item.stock}
                </td>

                <td className="p-4">₹{item.price}</td>

                <td className="p-4">
                  {item.stock > 50 && (
                    <span className="text-green-400">In Stock</span>
                  )}
                  {item.stock > 0 && item.stock <= 50 && (
                    <span className="text-yellow-400">Low</span>
                  )}
                  {item.stock === 0 && (
                    <span className="text-red-500">Out</span>
                  )}
                </td>

                <td className="p-4 flex gap-2">
                  <button className="btn-sm">Edit</button>
                  <button className="btn-sm bg-red-600 hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}