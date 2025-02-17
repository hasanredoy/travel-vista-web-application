import Image from "next/image";

import discountImage1 from "../../../../public/assets/discount_image/output-onlinegiftools (3).gif";
import discountImage2 from "../../../../public/assets/discount_image/travel_8205436.png";

const Discount = () => {
  return (
    <section className=" flex flex-col py-10 md:flex-row gap-y-10 md:gap-20   w-[94%] overflow-hidden md:w-[90%] lg:w-[85%] px-5 md:px-0 mx-auto justify-center">
      {/* 1st discount  */}
      <div className=" px-3 py-5 md:p-5 relative w-full flex-1 flex items-center justify-center flex-col  h-[200px] bg-gradient-to-r rounded-lg shadow-lg shadow-gray-400 from-[#f8fafa] via-[#68e3e7]  to-[#f9fcfc]">
        <h1 className=" text-base lg:text-xl font-black   ">
          Get Upto 40% discount on first tour!
        </h1>
        <div className=" flex gap-6">
          <Image
            src={discountImage1}
            alt="discount "
            height={100}
            width={100}
          ></Image>
        </div>
      </div>
      {/* 2nd discount  */}
      <div className=" px-3 py-3 md:py-5 md:p-5 relative flex-1 flex items-center justify-center flex-col gap-5 h-[200px] bg-gradient-to-l rounded-lg shadow-lg shadow-gray-400 from-[#7ff8f2] via-[#f3f5f5]  to-[#60f0e9]">
        <h1 className=" text-base lg:text-xl font-black text-center">
          <a href="#">Follow</a> us on Twitter and get 80% discount!
        </h1>
        <div className=" flex gap-6">
          <Image
            src={discountImage2}
            alt="discount "
            height={100}
            width={100}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Discount;
