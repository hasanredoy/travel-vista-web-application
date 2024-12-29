"use client";
import Heading from "@/components/reuseble/Heading";
import useDataLoader from "@/hooks/data-loader/useDataLoader";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Blogs = () => {
  // get blog data
  const blogs = useDataLoader("blog-data");
  
  return (
    <section className="w-[90%] my-10 md:w-[90%] lg:w-[85%] mx-auto ">
      <Heading imp={"Blogs, Opinions & Experience"}></Heading>
      <div className=" grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-md border relative bg-base-200 bg-opacity-20 shadow-md p-6 overflow-hidden rounded-lg"
          >
            <article>
              <h3 className=" absolute text-red-400 top-1 right-1  flex items-center text-lg gap-1 font-medium">
                {blog?.rating}{" "}
                <span>
                  <FaStar></FaStar>
                </span>
              </h3>
              <h2 className="text-xl font-bold">{blog?.title}</h2>
              <p className="mt-4 ">
                {blog?.experience?.slice(80)}{" "}
                <Link href={"/"} className=" text-blue-600">
                  see more...
                </Link>
              </p>
              <div>
                <h3 className=" flex gap-2 items-center my-3">
                  {" "}
                  <FaLocationDot className=" text-lg"></FaLocationDot>{" "}
                  <span>{blog?.location}</span>
                </h3>
              </div>
              <div className="flex items-center mt-8 space-x-4">
                <Link href={"/"}>
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
                    <Link title={blog?.user} href={"/"}>
                      <h3 className="text-sm font-medium">{blog?.user}</h3>
                    </Link>
                    <span className="text-sm dark:text-gray-600">
                      {blog?.date}
                    </span>
                  </div>
                  <div>
                    <Link href={"/"}>
                      <FaRegArrowAltCircleRight
                        title="View full blog!"
                        className=" text-3xl "
                      ></FaRegArrowAltCircleRight>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
      <Link href={"/"} className=" flex justify-center my-10">
        <button className=" btn-primary ">See All</button>
      </Link>
    </section>
  );
};

export default Blogs;
