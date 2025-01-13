"use client"
import Heading from "@/components/reuseble/Heading";
import useDataLoader from "@/hooks/data-loader/useDataLoader";
import Link from "next/link";



const Categories =() => {
  const [categories,loading] =  useDataLoader('/categories')
  return (
    <section  className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Your Gateway to'} imp={' Diverse Adventures'} desc={'Discover a variety of travel experiences.'}  ></Heading>
      <div className="mx-auto my-10" >
      {loading ? (
          <div className=" flex justify-center gap-10 w-full ">
            <div className="skeleton md:h-56 h-28 w-28  md:w-56 shrink-0"></div>
            <div className="skeleton md:h-56 h-28 w-28  md:w-56 shrink-0"></div>
            <div className="skeleton h-56 w-56 shrink-0 hidden md:block"></div>
            <div className="skeleton h-56 w-56 shrink-0 hidden md:block"></div>
          </div>
        ) :(<div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-20  place-items-center "> {categories?.map((category,index)=><Link href={`/tours?from=${category?.category}`}  key={index}>
        <div title={category?.category} className=" w-32 h-32  box-border  flex gap-2 flex-col items-center ">
        <img className=" w-24 h-24  " src={category?.image} alt="" />
        <p className="">{category?.category}</p>
        </div>

  </Link>)}</div>)}
      </div>
    </section>
  );
};

export default Categories;