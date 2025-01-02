"use client";

import BlogDetails from "@/pages/blogs/blog-details/BlogDetails";
import { useParams } from "next/navigation";

const Page = () => {
  const {id} = useParams();

  return <BlogDetails id={id}></BlogDetails>
};
export default Page;
