"use client";
import Heading from "@/components/reuseble/Heading";
import DataLoader from "@/hooks/data-loader/DataLoader";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const Blogs = () => {
  const blogs = DataLoader("blog-section-data");
  return (
    <section className="  w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto ">
      <Heading imp={"Blogs, Opinions & Experience"}></Heading>
      <div className=" grid grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-md p-6 overflow-hidden rounded-lg shadow "
          >
            <article>
              <h2 className="text-xl font-bold">{blog?.title}</h2>
              <p className="mt-4 ">{blog?.experience?.slice(80)} <Link href={'/'} className=" text-blue-600">see more...</Link></p>
              <div>
                <h3 className=" flex gap-2 items-center my-3">
                  {" "}
                  <FaLocationDot className=" text-lg"></FaLocationDot> <span>{blog?.location}</span>
                </h3>
              </div>
              <div className="flex items-center mt-8 space-x-4">
                <Image
                  src={blog?.image}
                  width={40}
                  height={40}
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-500"
                />
                <div>
                  <h3 className="text-sm font-medium">{blog?.user}</h3>
                  <span className="text-sm dark:text-gray-600">
                    {blog?.date}
                  </span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
