"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import axios from "axios";
import moment from "moment";
import { useSession } from "next-auth/react";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { FaBookOpen, FaRegCommentDots, FaHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const categories = ["All", "Adventure", "Food", "Culture", "Nature"];

export default function MyBlogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { user } = useSession()?.data || {};
  const [blogs, setBlogs] = useState([]);
  const email = user?.email;
  const [loading, setLoading] = useState(false);
  const [showForm,setShowForm] = useState(false)

  const handleAddBlog = (e) => {
    e.preventDefault();
    const blog_info = {
      user: user?.name,
      email: user?.email,
      date: new Date(),
      image: user?.image||"helloworld",
      title: e?.target?.title?.value,
      experience: e?.target?.description?.value,
      rating: 4,
      react: 5,
      location: e?.target?.location?.value,
      reactedBy:["hello@gmail.com"]
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data`, blog_info)
      .then((res) => {
        if (res.data?.data?.insertedId) {
          setRefetch(refetch+1)
          setShowForm(!showForm)
          swal("Blog added successfully", "", "success");
        }
        if (res.data?.message) {
          swal("Please change blog title and try again ", "", "error");
        }
      });
  };

  useEffect(() => {
    if (email) {
      setLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-blogs`, { email })
        .then((res) => {
          setBlogs(res?.data?.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [email]);

  if (loading || !user) {
    return <LoadingSpinner />;
  }

  return showForm?( <section className=" flex justify-center w-full mt-10 ">
        {/* add blog form */}
        <form
          onSubmit={handleAddBlog}
          className=" max-w-xs md:max-w-md card-body border shadow-xl rounded-md relative mx-4 md:mx-0"
        >
          <h3 className=" text-base md:text-xl font-semibold text-center">
            Please fill{" "}
          </h3>
          <button
            onClick={() => setShowForm(!showForm)}
            className=" absolute top-2 right-2"
          >
            <RxCross1 className="text-lg"></RxCross1>
          </button>
          {/* heading inpt  */}
          <div className="form-control">
            <label className="label">
              <span className=" text-sm font-bold lg:text-base  ">Heading**</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Adventure Trip Made Easy"
              className="input input-bordered"
              required
            />
          </div>
          {/* location inp  */}
          <div className="form-control relative">
            <label className="label">
              <span className=" text-sm font-bold lg:text-base ">Location**</span>
            </label>
            <input
              type="text"
              placeholder="Dhaka, Bangladesh"
              className="input input-bordered"
              required
              name="location"
            />
          </div>
          {/* description inp  */}
          <div>
            <label className="label">
              <span className=" text-sm font-bold lg:text-base ">Summary**</span>
            </label>
            <textarea
              rows={4}
              name="description"
              className="textarea w-full  textarea-bordered"
              placeholder="Summary"
            ></textarea>
          </div>
          <div className="mt-6 flex justify-center w-full">
            <button
              className=" btn-primary min-w-32 flex justify-center items-center w-full max-w-32"
            >
                Submit
            </button>
          </div>
        </form>
      </section>):(
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">My Blogs</h1>
        <div className="flex gap-2 md:gap-4">
          <button onClick={()=>setShowForm(true)} className=" rounded-lg btn">Add Blog</button>
          <div className="bg-[#b8f3f5] px-3 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-2">
            <FaBookOpen className="w-4 h-4 md:w-5 md:h-5" />
            <span>Blogs: {blogs.length}</span>
          </div>
          <div className="bg-[#b8f3f5] px-3 py-1 md:px-4 md:py-2 rounded-lg flex items-center gap-2">
            <FaHeart className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
            <span>Reactions: {blogs.reduce((acc, b) => acc + b.react, 0)}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Categories Sidebar */}
        <aside className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md overflow-x-auto md:overflow-visible">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="flex md:flex-col gap-2">
            {categories?.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer py-2 px-4 rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#b8f3f5] font-bold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {blogs?.map((blog, index) => (
            <div
              key={index}
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
          ))}
        </div>
      </div>
    </div>
  );
}