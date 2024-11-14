'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadCategories from "@/hooks/categories/useLoadCategories";
import Link from "next/link";

const Categories = () => {
  const categories = useLoadCategories()
  return (
    <section  className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Your Gateway to'} imp={' Diverse Adventures'} desc={'Discover a variety of travel experiences belong interests.'}  ></Heading>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  items-center justify-center gap-20  my-10 flex-row">
        {categories?.map((category,index)=><Link href={'/'}  key={index}>
              <div title={category?.category} className=" w-32 h-32 l box-border  flex gap-2 flex-col items-center ">
              <img className=" w-24 h-24  " src={category?.image} alt="" />
              <p className="">{category?.category}</p>
              </div>

        </Link>)}
      </div>
    </section>
  );
};

export default Categories;