/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


const ToursCard = ({ tours }) => {
  return (
    <main className=" md:w-[80%] lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20">
      {tours?.map((tour, index) => (
        <div
          className=" rounded-e-md relative flex flex-col md:flex-row gap-6 p-4 md:p-0 w-full border shadow-lg bg-base-300 bg-opacity-35 min-h-[300px] h-full"
          key={index}
        >
          {/* image section  */}
          <section className=" flex-1 p-0 md:p-5 pr-0 ">
            <Zoom>
            <img
              src={tour?.image}
              alt={tour?.title}
              className="  md:absolute -left-5 w-full h-[250px] md:w-[250px] md:h-[250px] lg:w-[210px] lg:h-[220px] xl:w-[250px] xl:h-[250px]"
            />
            </Zoom>
          </section>
          {/* texts and others section  */}
          <section className=" flex-1  p-5 pl-0  relative overflow-hidden ">
            <div>
              <h1 className=" pb-3 text-lg xl:text-xl font-semibold">{tour?.title}</h1>
              <p className=" text-sm md:text-base font-medium">{tour?.description}</p>
            </div>
            <div className=" my-3 mb-6">
              <h3 className=" text-base font-medium pb-3 ">Price: <span className=" text-[#2bbfc4]">{tour?.price}</span></h3>
              <h3 className=" text-base font-medium ">Duration: <span className=" text-[#2bbfc4]">{tour?.package_duration}</span></h3>
            </div>
            <h2 className=" text-lg font-bold mb-4 text-sky-500">{tour?.category}</h2>
            <Link href={`tours/${tour?.data_id}`} className=" btn-primary mt-5">Details</Link>
            <div className=" hidden md:block bg-sky-400 w-20  h-20 border rotate-45 absolute -right-12 -bottom-12  "></div>
            <div className=" hidden md:block bg-sky-400 w-20  h-20 border rotate-45 absolute -right-12 -top-12  "></div>
          </section>
        </div>
      ))}
    </main>
  );
};

export default ToursCard;
