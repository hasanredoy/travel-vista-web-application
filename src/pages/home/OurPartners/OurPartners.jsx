/* eslint-disable @next/next/no-async-client-component */
'use client'
/* eslint-disable @next/next/no-img-element */
// pages/our-partners.js

import Heading from "@/components/reuseble/Heading";
import DataLoader from "@/hooks/data-loader/DataLoader";
import Link from "next/link";


const OurPartners = () => {
   const ourPartners = DataLoader('our-partners')
   console.log(ourPartners);
  return (
    <section className="w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'All our '} imp={' Partners'} />
      <div className="flex justify-center gap-10">
        {ourPartners?.map((partner, index) => (
          <Link href={partner?.website} key={index}>
            <img
              src={partner?.logo}
              alt={partner?.name || "Partner logo"}
              title={partner?.name}
              className="h-28 bg-white border p-5 border-gray-500 rounded-lg w-40"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
