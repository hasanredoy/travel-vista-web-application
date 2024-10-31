// pages/our-partners.js

import Heading from "@/components/reuseble/Heading";
import Link from "next/link";
import DataLoader from "@/hooks/data-loader/DataLoader";

export async function getStaticProps() {
  const ourPartners = await DataLoader("our-partners") || [];
  return {
    props: {
      ourPartners,
    },
    revalidate: 60, // Revalidate every 60 seconds for fresh data
  };
}

const OurPartners = ({ ourPartners }) => {
  return (
    <section className="w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'All our '} imp={' Partners'} />
      <div className="flex justify-center gap-10">
        {ourPartners?.data?.map((partner, index) => (
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
