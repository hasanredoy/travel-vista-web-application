"use client"
import { FaUsers, FaClipboardList, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", earnings: 5000 },
  { month: "Feb", earnings: 7500 },
  { month: "Mar", earnings: 6000 },
  { month: "Apr", earnings: 8200 },
  { month: "May", earnings: 9000 },
  { month: "Jun", earnings: 11000 },
];

export default function AdminDashboard() {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <FaUsers className="text-[#8bf1f5] text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-gray-600">1,250</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <FaClipboardList className="text-[#8bf1f5] text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Total Bookings</h2>
            <p className="text-gray-600">530</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <FaMoneyBillWave className="text-[#8bf1f5] text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Total Earnings</h2>
            <p className="text-gray-600">$75,000</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <FaChartLine className="text-[#8bf1f5] text-4xl" />
          <div>
            <h2 className="text-xl font-semibold">Growth Rate</h2>
            <p className="text-gray-600">+12.5%</p>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-4xl mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Earnings Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#8bf1f5" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


