"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import axios from "axios";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function TotalEarnings() {
  // Get user session
  const { user } = useSession()?.data || {};
  // state to show no data available message 
  const [showMessage, setShowMessage] = useState(false);
  const [earningsData, setEarningsData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/host_earnings?host_email=${user.email}`)
        .then(res => {
          console.log(res.data);
          setEarningsData(res.data?.data || []);
        })
        .catch(err => console.error("Error fetching earnings data:", err));
    }
  }, [user]);
  // effect to handle loading spinner and no data message
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true); // Update state after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  // Calculate total earnings
  const totalEarnings = earningsData.reduce((sum, item) => sum + item.earnings, 0);

  return earningsData.length>0? (
    <section className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <motion.h1 
        className="text-3xl font-semibold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Total Earnings
      </motion.h1>

      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-md max-w-xl w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Total: ${totalEarnings}</h2>

        {/* Earnings List */}
        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {earningsData?.map((data, index) => (
            <motion.li 
              key={index} 
              className="flex justify-between p-3 bg-gray-50 rounded-lg mb-2 shadow-sm"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="text-gray-600 font-medium">{data?.monthYear}</span>
              <span className="text-gray-800 font-semibold">${data?.earnings}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Earnings Chart */}
      <section className="mt-6 w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Earnings Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="monthYear" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#4CAF50" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </section>
  ): (
    <section className="flex justify-center items-center min-h-screen">
      {!showMessage && <LoadingSpinner />}
      {showMessage && (
        <p className="text-gray-600 text-2xl font-bold">No Bookings.</p>
      )}
    </section>
  );
}
