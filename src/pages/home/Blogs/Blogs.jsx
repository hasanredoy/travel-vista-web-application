'use client'
import DataLoader from "@/hooks/data-loader/DataLoader";
import Image from "next/image";

const Blogs = () => {
  const blogs = DataLoader('blog-section-data')
  return (
   <section className="  w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto flex gap-5">
        {blogs.map((blog,index)=><div key={index} className="max-w-md p-6 overflow-hidden rounded-lg shadow ">
	<article>
		<h2 className="text-xl font-bold">Sed diam massa, semper a condimentum</h2>
		<p className="mt-4 ">Morbi porttitor mi in diam scelerisque commodo. Proin sed laoreet libero. Fusce faucibus porttitor lacus, at blandit mauris blandit eget. Donec facilisis lorem et risus commodo, quis auctor nulla varius. Pellentesque facilisis feugiat turpis, id molestie augue semper quis. Nunc ornare eget est sit amet elementum.</p>
		<div className="flex items-center mt-8 space-x-4">
			<Image src="https://source.unsplash.com/100x100/?portrait" width={40} height={40} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
			<div>
				<h3 className="text-sm font-medium">Leroy Jenkins</h3>
				<time datetime="2021-02-18" className="text-sm dark:text-gray-600">Feb 18th 2021</time>
			</div>
		</div>
	</article>
</div>)}
   </section>
  );
};

export default Blogs;