/* eslint-disable @next/next/no-img-element */
"use client"
import Heading from "@/components/reuseble/Heading";
import useDataLoader from "@/hooks/data-loader/useDataLoader";
import Link from "next/link";


const OurPartners =() => {
   const [ourPartners] = useDataLoader('our-partners')||[]
  return (
    <section className="w-[92%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'All our '} imp={' Partners'} />
      <div className={` md:w-[70%] mx-auto lg:w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-6 place-items-center lg:gap-10`}>
        {ourPartners?.map((partner, index) => (
          <Link href={partner?.website||'./hello.com'} key={index}>
            <img
              src={partner?.logo||"https:partners.com"}
              alt={partner?.name || "Partner logo"}
              title={partner?.name}
              className=" h-24 lg:h-28 bg-white border p-5 border-gray-500 rounded-lg w-32 lg:w-40"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
