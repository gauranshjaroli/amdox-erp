import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ERP Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold">120</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500">Active Projects</h3>
            <p className="text-2xl font-bold">8</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500">Pending Tasks</h3>
            <p className="text-2xl font-bold">15</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold">₹45,000</p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✔ New user registered</li>
            <li>✔ Project "AI ERP" updated</li>
            <li>✔ Task completed by team</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;