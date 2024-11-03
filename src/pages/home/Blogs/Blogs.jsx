'use client'
import DataLoader from "@/hooks/data-loader/DataLoader";

const Blogs = () => {
  const blogs = DataLoader('blog-section-data')
  // console.log(blogs);
  return (
   <section>

   </section>
  );
};

export default Blogs;