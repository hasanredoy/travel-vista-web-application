"use client"
import { motion } from "framer-motion";

export default function TotalEarnings() {
  const earningsData = [
    { month: "January", earnings: 5000 },
    { month: "February", earnings: 6200 },
    { month: "March", earnings: 4800 },
    { month: "April", earnings: 7100 },
    { month: "May", earnings: 6500 },
  ];

  const totalEarnings = earningsData.reduce((acc, curr) => acc + curr.earnings, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
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
        <motion.ul 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {earningsData.map((data, index) => (
            <motion.li 
              key={index} 
              className="flex justify-between p-3 bg-gray-50 rounded-lg mb-2 shadow-sm"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="text-gray-600 font-medium">{data.month}</span>
              <span className="text-gray-800 font-semibold">${data.earnings}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
