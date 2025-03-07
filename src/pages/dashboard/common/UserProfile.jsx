/* eslint-disable @next/next/no-img-element */
"use client"
import { FaBlog, FaStar, FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

// const user = {
//   name: "John Doe",
//   profileImage: "https://via.placeholder.com/150",
//   blogCount: 12,
//   reviewCount: 24,
//   totalReactions: 120,
//   destinationsCovered: 8,
//   blogs: [
//     {
//       id: 1,
//       title: "Exploring the Alps",
//       description: "An unforgettable journey through the Swiss Alps.",
//       image: "https://via.placeholder.com/300",
//     },
//     {
//       id: 2,
//       title: "A Week in Bali",
//       description: "The best beaches and cultural experiences in Bali.",
//       image: "https://via.placeholder.com/300",
//     },
//   ],
// };

export default function UserProfile({id}) {
  const [userInfo,setUserInfo] =useState({})
  useEffect(()=>{
    axios.get(`${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/user/${id}`)
    .then(res=>{
      console.log(res.data)
      setUserInfo(res.data?.data)
    })
  },[id])
  console.log(userInfo)
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={userInfo?.image}
          alt={userInfo?.name}
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h1 className="text-2xl font-semibold mt-4">{userInfo?.name}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="flex items-center space-x-2">
            <FaBlog className="text-[#8bf1f5] text-2xl" />
            <p className="text-gray-700 font-medium">Blogs: {userInfo?.blog}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaStar className="text-[#8bf1f5] text-2xl" />
            <p className="text-gray-700 font-medium">Reviews: {userInfo.reviews}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="text-[#8bf1f5] text-2xl" />
            <p className="text-gray-700 font-medium">Reactions: {userInfo?.reactions}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-[#8bf1f5] text-2xl" />
            <p className="text-gray-700 font-medium">Destinations: {userInfo?.destinations}</p>
          </div>
        </div>
      </motion.div>
      
      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userInfo?.blogs?.map((blog, index) => (
             <motion.div key={index}>
                       <div
                         
                         className="shadow-md bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
                       >
                         <div className="flex items-center gap-3 mb-3">
                           <img
                             src={blog?.image}
                             alt={blog?.user}
                             className="w-10 h-10 rounded-full object-cover"
                           />
                           <div>
                             <span className="font-semibold text-lg block">
                               {blog?.user}
                             </span>
                             <span className="text-sm text-green-500">{moment(blog?.date).format("lll")}</span>
                           </div>
                         </div>
                         <h3 className="text-xl font-semibold mb-2">{blog?.title}</h3>
                         <p className="text-gray-600 mb-3">{blog?.experience}</p>
                         <p className="text-sm text-gray-500 mb-2">
                           Location: {blog?.location}
                         </p>
                         <div className="flex justify-between text-sm text-gray-600">
                           <div className="flex items-center gap-2">
                             <FaHeart className="w-4 h-4 text-red-500" /> {blog?.react}
                           </div>
                         </div>
                       </div>
                    
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
