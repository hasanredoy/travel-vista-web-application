/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaRegArrowAltCircleRight,
  FaStar,
  FaTrash,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import swal from "sweetalert";
import useLoadBlogs from "@/hooks/blogs-data/useLoadBlogs";
import moment from "moment";
import { IoMdCopy } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import useLoadCount from "@/hooks/useLoadCount";
import Pagination from "@/components/reuseble/Pagination";

const Blogs = () => {
  // state to handle user blogs
  const [userBlogs, setUserBlogs] = useState(false);

  // sort value handler state
  const [sortVal, setSortVal] = useState("");
  // add blog form handler
  const [showForm, setShowForm] = useState(false);
  // state to refresh blogs
  const [refetch, setRefetch] = useState(0);

  // state to handle copy blog
  const [copied, setCopied] = useState(true);

  const blogsCount = useLoadCount("blog-data/count");
  const [currentPage, setCurrentPage] = useState(0);
  // load blogs
  const [blogs, loading] = useLoadBlogs(
    userBlogs,
    sortVal,
    refetch,
    currentPage
  );

  //  get user from session
  const { user } = useSession()?.data || {};

  const handleAddBlog = (e) => {
    e.preventDefault();
    const blog_info = {
      user: user?.name,
      email: user?.email,
      date: new Date(),
      image: user?.image || "helloworld",
      title: e?.target?.title?.value,
      experience: e?.target?.description?.value,
      rating: 4,
      react: 5,
      location: e?.target?.location?.value,
      reactedBy: ["hello@gmail.com"],
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data`, blog_info)
      .then((res) => {
        if (res.data?.data?.insertedId) {
          setRefetch(refetch + 1);
          setShowForm(!showForm);
          swal("Blog added successfully", "", "success");
        }
        if (res.data?.message) {
          swal("Please change blog title and try again ", "", "error");
        }
      });
  };
  // handler to delete user blogs
  const handleDeleteBlog = (id) => {
    try {
      swal({
        title: "Are you sure?",
        text: "You wanna Delete your blog!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data?id=${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data?.data.deletedCount > 0) {
                setRefetch(refetch + 1);
                swal("Blog has been deleted!", {
                  icon: "success",
                });
              }
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // handler to copy user blog
  const handleCopy = (text) => {
    setCopied(text);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopied("");
    }, 1000);
  };

  const handleReactOnPost = (id) => {
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data?id=${id}&email=${user.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.modifiedCount > 0) {
          setRefetch(refetch + 1);
          const existingIds = JSON.parse(localStorage.getItem("ids")) || [];
          const updatedIds = [...existingIds, id];
          localStorage.setItem("ids", JSON.stringify(updatedIds));
        }
      });
  };
  // return loading spinner if blogs data is not available
  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return showForm ? (
    <section className=" flex justify-center w-full mt-10 ">
      {/* add blog form */}
      <form
        onSubmit={handleAddBlog}
        className=" max-w-xs md:max-w-md card-body border shadow-xl rounded-md bg-sky-400 bg-opacity-10 relative mx-4 md:mx-0"
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
          <button className=" btn-primary min-w-32 flex justify-center items-center w-full max-w-32">
            Submit
          </button>
        </div>
      </form>
    </section>
  ) : (
    <main className="w-[90%] my-10 md:w-[90%] mx-auto flex justify-between  min-h-screen">
      {/* user info section */}
      <section className=" hidden md:block md:w-[35%] lg:w-[30%]">
        <div className=" bg-gradient-to-tr from-blue-200 via-sky-200 to-rose-200 p-0.5 max-w-xs rounded-xl ">
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  bg-base-200 ">
            <img
              src={user?.image}
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square border border-sky-400 p-1"
            />
            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  {user?.name}
                </h2>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="GitHub"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaGithub></FaGithub>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cards section  */}
      <section className=" w-full md:w-[62%] lg:w-[68%]">
        {/* sort and add new blog button div  */}
        <div className=" mb-10 flex justify-between flex-col md:flex-row gap-5">
          {/* add new blog button */}
          <div className=" flex gap-10">
            <button
              onClick={() => setShowForm(!showForm)}
              title="click to add a new blog"
              className=" btn flex gap-2 items-center"
            >
              Add New <MdAdd className="text-xl"></MdAdd>{" "}
            </button>
            <button
              title="Click to see your blogs"
              onClick={() => setUserBlogs(!userBlogs)}
              className={`btn rounded-xl ${
                userBlogs && "border bg-neutral-600 text-white"
              }`}
            >
              Your Blogs{" "}
            </button>
          </div>
          {/* sort btn  */}
          <select
            onChange={(e) => setSortVal(e.target.value)}
            className="select select-info w-full max-w-[150px]"
          >
            <option disabled selected>
              Sort
            </option>
            <option>New-Old</option>
            <option>Old-New</option>
          </select>
        </div>
        {userBlogs && blogs?.length < 1 ? (
          <div className=" flex justify-center "><sapn className="text-lg text-red-600 font-bold">You haven&apos;t added a blog!</sapn></div>
        ) : (
          <>
            {" "}
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
              {blogs?.map((blog, index) => (
                <div
                  key={index}
                  className="max-w-md p-0.5 bg-gradient-to-tr from-yellow-200 via-slate-400 to-pink-200 rounded-lg relative "
                >
                  {user?.email == blog?.email && (
                    <button
                      onClick={() => handleDeleteBlog(blog?._id)}
                      className=" absolute top-1 hover:text-gray-600 right-1 z-20 text-red-600 "
                    >
                      <FaTrash></FaTrash>
                    </button>
                  )}
                  <div className="max-w-md border relative bg-base-200  shadow-md p-6 overflow-hidden rounded-lg min-h-full">
                    <article>
                      <button
                        onClick={() => handleCopy(blog?.experience)}
                        className=" absolute  top-7 right-1.5"
                      >
                        {copied == blog?.experience ? (
                          <IoCheckmarkCircleSharp className="text-green-600"></IoCheckmarkCircleSharp>
                        ) : (
                          <IoMdCopy className="text-base"></IoMdCopy>
                        )}
                      </button>
                      <h2 className=" text-lg md:text-xl font-bold">
                        {blog?.title}
                      </h2>

                      {blog?.experience?.length > 180 ? (
                        <p className="mt-4 pl-1  text-sm md:text-base">
                          <span>{blog?.experience?.slice(0, 180)}</span>{" "}
                          <Link
                            href={`/blogs/${blog?._id}`}
                            className=" text-blue-600"
                          >
                            see more...
                          </Link>
                        </p>
                      ) : (
                        <p className="my-4 pl-1 text-sm md:text-base">
                          {blog?.experience}
                        </p>
                      )}

                      <div className=" flex justify-between">
                        <h3 className=" flex gap-2 items-center my-3">
                          {" "}
                          <FaLocationDot className=" text-lg"></FaLocationDot>{" "}
                          <span>{blog?.location}</span>
                        </h3>
                        <div className="mt-3">
                          {blog?.reactedBy?.includes(user?.email) ? (
                            <div className="flex gap-2 items-center">
                              {blog?.react || 0}
                              <FaHeart className="text-xl text-red-500" />
                            </div>
                          ) : (
                            <button
                              onClick={() => handleReactOnPost(blog?._id)}
                              title={`${blog?.react || 0} reactions`}
                              className="flex gap-2 items-center"
                            >
                              {blog?.react || 0}
                              <CiHeart className="text-2xl text-gray-500" />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center mt-8 space-x-4">
                        <Link href={`/dashboard/user/${blog?._id}`}>
                          <Image
                            src={blog?.image}
                            width={40}
                            title={blog?.user}
                            height={40}
                            alt=""
                            className="w-10 h-10 rounded-full dark:bg-gray-500"
                          />
                        </Link>
                        {/* user name and details btn container div  */}
                        <div className=" flex justify-between w-full items-center">
                          <div>
                            <Link
                              title={blog?.user}
                              href={`/dashboard/user/${blog?._id}`}
                            >
                              <h3 className="text-sm font-medium">
                                {blog?.user}
                              </h3>
                            </Link>
                            <span className="text-sm dark:text-gray-600">
                              {moment(blog?.date).format("lll")}
                            </span>
                          </div>
                          <div>
                            <Link href={`/blogs/${blog?._id}`}>
                              <FaRegArrowAltCircleRight
                                title="View full blog!"
                                className=" text-xl md:text-3xl "
                              ></FaRegArrowAltCircleRight>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            </div>
            {/* pagination section  */}
            <section className="mt-4">
              <Pagination
                count={blogsCount}
                dataPerPage={6}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              ></Pagination>
            </section>
          </>
        )}
      </section>
    </main>
  );
};

export default Blogs;
