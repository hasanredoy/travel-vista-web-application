"use client";
import {
  FaUsers,
  FaClipboardList,
  FaMoneyBillWave,
  FaChartLine,
  FaMapMarkedAlt,
  FaBlog,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useLoadUserRole from "@/hooks/user-role/useLoadUserRole";
import useLoadAdminStats from "@/hooks/stats/useLoadAdminStats";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";

const data = [
  { month: "Jan", earnings: 5000 },
  { month: "Feb", earnings: 7500 },
  { month: "Mar", earnings: 6000 },
  { month: "Apr", earnings: 8200 },
  { month: "May", earnings: 9000 },
  { month: "Jun", earnings: 11000 },
];

export default function AdminDashboard() {
  // get user role
  const role = useLoadUserRole();

  // get admin stats
  const [stats, loading] = useLoadAdminStats(role);

  console.log(stats);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen h-full flex flex-col items-center">
      <motion.h1
        className="text-3xl font-semibold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admin Dashboard
      </motion.h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 w-full max-w-6xl">
      {/* Total Users */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg custom-shadow-1 hover:shadow-xl transition flex items-center space-x-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaUsers className="text-[#8bf1f5] text-4xl" />
        <div>
          <h2 className="text-base md:text-lg font-semibold">Total Users</h2>
          <p className="text-xl font-semibold text-black">{stats?.totalUser||0}</p>
        </div>
      </motion.div>

      {/* Total Destinations */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg custom-shadow-2 hover:shadow-xl transition flex items-center space-x-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaMapMarkedAlt className="text-[#8bf1f5] text-4xl" />
        <div>
          <h2 className="text-base md:text-lg font-semibold">All Destinations</h2>
          <p className="text-xl font-semibold text-black">{stats?.totalTours||0}</p>
        </div>
      </motion.div>
      {/* Total blogs */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg custom-shadow-2 hover:shadow-xl transition flex items-center space-x-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaBlog className="text-[#8bf1f5] text-4xl" />
        <div>
          <h2 className="text-base md:text-lg font-semibold">Total Blogs</h2>
          <p className="text-xl font-semibold text-black">{stats?.totalBlogs||0}</p>
        </div>
      </motion.div>

      {/* Total Bookings */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg custom-shadow-4 hover:shadow-xl transition flex items-center space-x-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaClipboardList className="text-[#8bf1f5] text-4xl" />
        <div>
          <h2 className="text-base md:text-lg font-semibold">Total Bookings</h2>
          <p className="text-xl font-semibold text-black">{stats?.totalBookings||0}</p>
        </div>
      </motion.div>

      {/* Total Earnings */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg custom-shadow-4 hover:shadow-xl transition flex items-center space-x-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaMoneyBillWave className="text-[#8bf1f5] text-4xl" />
        <div>
          <h2 className="text-base md:text-lg font-semibold">Total Earnings</h2>
          <p className="text-xl font-semibold text-black">$ {stats?.totalEarnings||0}</p>
        </div>
      </motion.div>

      {/* Growth Rate */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg custom-shadow-5 hover:shadow-xl transition flex items-center space-x-4"
        whileHover={{ scale: 1.05 }}
      >
        <FaChartLine className="text-[#8bf1f5] text-4xl" />
        <div>
          <h2 className="text-base md:text-lg font-semibold">Growth Rate</h2>
          <p className="text-xl font-semibold text-black">{stats?.monthlyGrowth||0}%</p>
        </div>
      </motion.div>
    </div>
    <div className="p-6 bg-white rounded-xl shadow-lg w-full overflow-x-auto max-w-4xl mx-auto mt-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Monthly Earnings</h2>
      </div>

      {/* Recharts Area Chart */}
      <div className="w-full h-64 min-w-[500px] ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={stats?.data?stats?.data:data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="monthYear" />
            <YAxis />
            <Tooltip />
            <Area
               type="monotone"
               dataKey="earnings"
               stroke="#38bdf8"  
               fill="#38bdf8"   
               fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    
    </div>
    </div>
  );
}
