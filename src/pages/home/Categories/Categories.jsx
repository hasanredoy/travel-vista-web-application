'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadCategories from "@/hooks/categories/useLoadCategories";

const Categories = () => {
  const categories = useLoadCategories()
  return (
    <section>
      <Heading t1={'Your Gateway to'} imp={' Diverse Adventures'} desc={'Discover a variety of travel experiences tailored to your interests.'}  ></Heading>
      <div>
        {categories?.map((category,index)=><div key={index}>
              <img src={category?.icon} alt="" />
        </div>)}
      </div>
    </section>
  );
};

export default Categories;