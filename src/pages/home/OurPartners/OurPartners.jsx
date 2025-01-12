
import Heading from "@/components/reuseble/Heading";
import { loadData } from "@/utils/loadData";
import Link from "next/link";


const OurPartners =async () => {
   const ourPartners =await loadData('/our-partners')
  return (
    <section className="w-[92%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'All our '} imp={' Partners'} />
      <div className={` md:w-[70%] mx-auto lg:w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-6 place-items-center lg:gap-10`}>
        {ourPartners?.map((partner, index) => (
          <Link href={partner?.website} key={index}>
            <img
              src={partner?.logo}
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
