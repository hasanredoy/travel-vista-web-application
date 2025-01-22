"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight, FaStar, FaTrash } from "react-icons/fa";
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



const Blogs = () => {
  // state to handle user blogs
  const [userBlogs, setUserBlogs] = useState(false);

  // sort value handler state
  const [sortVal, setSortVal] = useState("");
  // add blog form handler
  const [showForm, setShowForm] = useState(false);
  // state to refresh blogs
  const [refetch, setRefetch] = useState(0);

  // state look after user react on blog
  const [userEmailFromLS,setUserEmailFromLS] = useState("")

  // state to handle copy blog 
  const [copied , setCopied] = useState(true)

  // load blogs
  const [blogs, loading] = useLoadBlogs(userBlogs, sortVal, refetch);

  // get session and then user
  const session = useSession();
  const user = session?.data?.user;

  const handleAddBlog = (e) => {
    e.preventDefault();
    const blog_info = {
      user: user?.name,
      email: user?.email,
      date: new Date(),
      image: user?.image,
      title: e?.target?.title?.value,
      experience: e?.target?.description?.value,
      rating: 4,
      react: 5,
      location: e?.target?.location?.value,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data`, blog_info)
      .then((res) => {
        console.log(res.data);
        if (res.data?.data?.insertedId) {
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
  const handleCopy=(text)=>{
    setCopied(text)
    navigator.clipboard.writeText(text)
    setTimeout(() => {
      setCopied("")
    }, 1000);
  }


useEffect(()=>{
  const userInfoForReaction = localStorage.getItem("userInfo")
  setUserEmailFromLS(userInfoForReaction)
},[])
  
  const handleReactOnPost=(id)=>{
    if(userEmailFromLS==user.email){
      console.log('hellog')
      return
    }
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-data?id=${id}`, {
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.data?.modifiedCount > 0) {
          setRefetch(refetch + 1);
          const info = [id]
          localStorage.setItem("userInfo",info)

        }
      });
  }

  // return loading spinner if blogs data is not available
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (!session?.data?.user) return <LoadingSpinner></LoadingSpinner>;

  return showForm ? (
    <section className=" flex justify-center w-full mt-10 ">
    {/* add blog form */}
      <form
        onSubmit={handleAddBlog}
        className=" max-w-md card-body border shadow-xl rounded-md bg-sky-400 bg-opacity-10 relative"
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
            disabled={loading}
            className=" btn-primary min-w-32 flex justify-center items-center w-full max-w-32"
          >
            {loading ? (
              <FiLoader className=" animate-spin text-2xl font-bold text-black"></FiLoader>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </section>
  ) : (
    <main className="w-[90%] my-10 md:w-[90%] mx-auto flex justify-between  min-h-screen">
      {/* user info section  */}
      <section className=" w-[30%]">
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
                  <svg
                    viewBox="0 0 496 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Dribble"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cards section  */}
      <section className=" w-[68%]">
        {/* sort and add new blog button div  */}
        <div className=" mb-10 flex justify-between">
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
        <div className=" grid grid-cols-2 gap-5 md:gap-10">
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
              <div className="max-w-md border relative bg-base-200  shadow-md p-6 overflow-hidden rounded-lg">
                <article>
                  <button onClick={()=>handleCopy(blog?.experience)} className=" absolute  top-7 right-1.5">
                    {copied==blog?.experience?<IoCheckmarkCircleSharp className="text-green-600"></IoCheckmarkCircleSharp>:<IoMdCopy className="text-base"></IoMdCopy>}
                  </button>
                  <h2 className="text-xl font-bold">{blog?.title}</h2>

                  {blog?.experience?.length > 180 ? (
                    <p className="mt-4 pl-1 ">
                      <span>{blog?.experience?.slice(0, 180)}</span>{" "}
                      <Link
                        href={`/blogs/${blog?._id}`}
                        className=" text-blue-600"
                      >
                        see more...
                      </Link>
                    </p>
                  ) : (
                    <p className="my-4 pl-1">{blog?.experience}</p>
                  )}

                  <div className=" flex justify-between">
                    <h3 className=" flex gap-2 items-center my-3">
                      {" "}
                      <FaLocationDot className=" text-lg"></FaLocationDot>{" "}
                      <span>{blog?.location}</span>
                    </h3>
                    <button
                      onClick={()=>handleReactOnPost(blog?._id)}
                      title={`${blog?.react} reactions`}
                      className="flex gap-2 items-center"
                    >
                      {blog?.react}
                      <CiHeart className=" text-2xl text-red-500"></CiHeart>
                    </button>
                  </div>
                  <div className="flex items-center mt-8 space-x-4">
                    <Link href={`/dashboard/profile/${blog?._id}`}>
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
                        <Link title={blog?.user} href={`/dashboard/profile/${blog?._id}`}>
                          <h3 className="text-sm font-medium">{blog?.user}</h3>
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
      </section>
    </main>
  );
};

export default Blogs;
