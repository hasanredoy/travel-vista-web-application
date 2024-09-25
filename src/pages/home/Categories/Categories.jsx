'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadCategories from "@/hooks/categories/useLoadCategories";

const Categories = () => {
  const categories = useLoadCategories()
  return (
    <section  className=" w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Your Gateway to'} imp={' Diverse Adventures'} desc={'Discover a variety of travel experiences belong interests.'}  ></Heading>
      <div className=" flex items-center justify-center gap-20  my-10 flex-row">
        {categories?.map((category,index)=><div  key={index}>
              <div className=" w-32 h-32 rounded-full box-border  flex gap-2 flex-col items-center ">
              <img className=" w-24 h-24 rounded-full " src={category?.image} alt="" />
              <p className="">{category?.category}</p>
              </div>

        </div>)}
      </div>
    </section>
  );
};

export default Categories;