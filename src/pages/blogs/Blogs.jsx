"use client"
import useDataLoader from "@/hooks/data-loader/useDataLoader";

const Blogs = () => {
  const blogs = useDataLoader('blog-data')
  return (
    <main className=" min-h-screen">
      hello from blogs page
    </main>
  );
};

export default Blogs;