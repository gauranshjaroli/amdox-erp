import { useState } from "react";
import { 
  Users, 
  Briefcase, 
  Clock, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  ChevronDown 
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const stats = [
  { 
    label: "Total Revenue", 
    value: "₹8.4L", 
    change: "+18.2%", 
    isPositive: true, 
    icon: TrendingUp,
    color: "bg-emerald-500" 
  },
  { 
    label: "Total Employee", 
    value: "1,280", 
    change: "+12.5%", 
    isPositive: true, 
    icon: Users,
    color: "bg-blue-500" 
  },
  { 
    label: "Total Projects", 
    value: "48", 
    change: "+12", 
    isPositive: true, 
    icon: Briefcase,
    color: "bg-purple-500" 
  },
  { 
    label: "Pending Tasks", 
    value: "42", 
    change: "-5", 
    isPositive: false, 
    icon: Clock,
    color: "bg-orange-500" 
  },
];

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
  { name: 'Jul', revenue: 3490 },
  { name: 'Aug', revenue: 4200 },
  { name: 'Sep', revenue: 3800 },
  { name: 'Oct', revenue: 4500 },
  { name: 'Nov', revenue: 5200 },
  { name: 'Dec', revenue: 6100 },
];

const pieData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Groceries', value: 300 },
  { name: 'Books', value: 200 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg ${stat.color} text-white shadow-lg shadow-${stat.color.split('-')[1]}-200`}>
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.change}
                {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 mt-0.5">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Area Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Revenue Growth</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Monthly Orders</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Jan', orders: 400 },
                { name: 'Feb', orders: 210 },
                { name: 'Mar', orders: 285 },
                { name: 'Apr', orders: 240 },
                { name: 'May', orders: 189 },
                { name: 'Jun', orders: 239 },
                { name: 'Jul', orders: 349 },
                { name: 'Aug', orders: 280 },
                { name: 'Sep', orders: 310 },
                { name: 'Oct', orders: 295 },
                { name: 'Nov', orders: 350 },
                { name: 'Dec', orders: 420 },
              ]}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                  }} 
                />
                <Bar 
                  dataKey="orders" 
                  fill="#8b5cf6" 
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                  activeBar={{ fill: '#7c3aed' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Lower Section: Pie Chart & Ongoing Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pie Chart */}
        <div className="lg:col-span-1 bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-bold text-slate-900 mb-4">Order Categories</h3>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900 text-sm">Ongoing Projects</h3>
            <button className="text-xs text-blue-600 font-semibold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { name: "ERP Dashboard", client: "Amdox Corp", progress: 85, status: "Active", color: "bg-blue-500", contributors: ["AJ", "KS", "RT"] },
              { name: "Cloud Infra", client: "Nexus Tech", progress: 40, status: "Progress", color: "bg-purple-500", contributors: ["ML", "PD"] },
              { name: "Mobile API", client: "Swift Logistics", progress: 65, status: "Review", color: "bg-amber-500", contributors: ["BT", "YW", "GH"] },
              { name: "Security Audit", client: "Guardian Bank", progress: 95, status: "Final", color: "bg-emerald-500", contributors: ["DK", "SM"] },
            ].map((project, i) => (
              <div key={i} className="p-3 rounded-lg border border-slate-50 bg-slate-50/50 hover:bg-slate-100/50 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-2xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.name}</h4>
                    <p className="text-[12px] text-slate-500">{project.client}</p>
                  </div>
                  <span className="text-[15px] font-bold text-slate-400">{project.status}</span>
                </div>

                <div className="flex justify-between items-end mb-2">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-2">
                    {project.contributors.map((initial, idx) => (
                      <div 
                        key={idx} 
                        className="w-5 h-5 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600 shadow-sm"
                        title={initial}
                      >
                        {initial}
                      </div>
                    ))}
                    <div className="w-5 h-5 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400 shadow-sm">
                      +
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700">{project.progress}%</span>
                </div>

                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${project.color} rounded-full transition-all duration-700`} 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;