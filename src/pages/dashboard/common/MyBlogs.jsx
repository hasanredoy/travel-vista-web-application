"use client"
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import axios from "axios";
import { useSession } from "next-auth/react";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { FaBookOpen, FaRegCommentDots, FaHeart } from "react-icons/fa";

const categories = ["All", "Adventure", "Food", "Culture", "Nature"];

export default function MyBlogs() {
  // state for active cat 
  const [activeCategory, setActiveCategory] = useState("All");
  // get user
   const {user} = useSession()?.data||{}

  //  state for blogs 
const [blogs, setBlogs]=useState([])

  //  state for loading 
const [loading, setLoading]=useState(false)
useEffect(()=>{
  axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-blogs`, {
        email: user?.email,
      })
      .then(res=>{
        console.log(res?.data)
        setLoading(true)
        setBlogs(res?.data?.data)
        setLoading(false)
      })
},[user])
if(loading){
  return <LoadingSpinner></LoadingSpinner>
}
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Blogs</h1>
        <div className="flex gap-4">
          <div className="bg-[#b8f3f5] px-4 py-2 rounded-lg flex items-center gap-2">
            <FaBookOpen className="w-5 h-5" />
            <span>Blogs: {blogs.length}</span>
          </div>
          <div className="bg-[#b8f3f5] px-4 py-2 rounded-lg flex items-center gap-2">
            <FaHeart className="w-5 h-5 text-red-500" />
            <span>Reactions: {blogs.reduce((acc, b) => acc + b.react, 0)}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <aside className="w-1/3 max-h-[350px] bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer py-2 px-4 rounded-lg mb-2 transition-all ${
                  activeCategory === cat ? "bg-[#b8f3f5] font-bold" : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="shadow-md bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={blog.image}
                  alt={blog.user}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <span className="font-semibold text-lg block">{blog.user}</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-3">{blog.experience}</p>
              <p className="text-sm text-gray-500 mb-2">Location: {blog.location}</p>
              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaHeart className="w-4 h-4 text-red-500" /> {blog.react}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
