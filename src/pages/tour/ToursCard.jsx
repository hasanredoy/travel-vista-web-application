/* eslint-disable @next/next/no-img-element */

import Link from "next/link";


const ToursCard = ({ tours }) => {
  return (
    <main className=" grid grid-cols-2 gap-20">
      {tours?.map((tour, index) => (
        <div
          className=" rounded-e-md relative flex gap-6 w-full border shadow-lg bg-base-300 bg-opacity-35 min-h-[300px] h-full"
          key={index}
        >
          {/* image section  */}
          <section className=" flex-1  p-5 pr-0 ">
            <img
              src={tour?.image}
              alt={tour?.title}
              className="absolute -left-5 w-[250px] h-[250px]"
            />
          </section>
          {/* texts and others section  */}
          <section className=" flex-1  p-5 pl-0  relative overflow-hidden ">
            <div>
              <h1 className=" pb-3 text-xl font-semibold">{tour?.title}</h1>
              <p className=" text-sm font-medium">{tour?.description}</p>
            </div>
            <div className=" my-3 mb-6">
              <h3 className=" text-base font-medium pb-3 ">Price: <span className=" text-[#2bbfc4]">{tour?.price}</span></h3>
              <h3 className=" text-base font-medium ">Duration: <span className=" text-[#2bbfc4]">{tour?.package_duration}</span></h3>
            </div>
            <Link href={`tours/${tour?.data_id}`} className=" btn-primary mt-5">Details</Link>
            <div className=" bg-sky-400 w-20  h-20 border rotate-45 absolute -right-12 -bottom-12  "></div>
            <div className=" bg-sky-400 w-20  h-20 border rotate-45 absolute -right-12 -top-12  "></div>
          </section>
        </div>
      ))}
    </main>
  );
};

export default ToursCard;
