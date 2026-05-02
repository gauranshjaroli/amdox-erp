import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { key: "profile", label: "Profile" },
  { key: "company", label: "Company" },
  { key: "users", label: "Users & Roles" },
  { key: "notifications", label: "Notifications" },
  { key: "security", label: "Security" },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 bg-slate-900 rounded-xl p-4 shadow-lg">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`p-3 rounded-lg cursor-pointer mb-2 transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 bg-slate-900 rounded-xl p-6 shadow-lg"
        >
          {activeTab === "profile" && <Profile />}
          {activeTab === "company" && <Company />}
          {activeTab === "users" && <Users />}
          {activeTab === "notifications" && <Notifications />}
          {activeTab === "security" && <Security />}
        </motion.div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Profile</h2>
      <input className="input" placeholder="Name" />
      <input className="input" placeholder="Email" />
      <button className="btn">Save</button>
    </div>
  );
}

function Company() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Company</h2>
      <input className="input" placeholder="Company Name" />
      <input className="input" placeholder="GST Number" />
      <button className="btn">Update</button>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Users & Roles</h2>
      <button className="btn">+ Add User</button>

      <div className="mt-4 bg-slate-800 p-4 rounded-lg">
        <p>Admin - Full Access</p>
        <p>Manager - Limited Access</p>
      </div>
    </div>
  );
}

function Notifications() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Notifications</h2>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Email Alerts
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> SMS Alerts
      </label>
    </div>
  );
}

function Security() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Security</h2>
      <input className="input" placeholder="New Password" />
      <button className="btn">Change Password</button>
    </div>
  );
}