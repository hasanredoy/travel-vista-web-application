'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadWhyChooseUsData from "@/hooks/why-choose-us/useLoadWhyChooseUsData";

const WhyChooseUs = () => {
  const data = useLoadWhyChooseUsData()
  // const stats = [
  //   {
  //     title: "Total Users",
  //     value: "12,345",
  //     icon: "👥",
  //     bgColor: "bg-blue-500",
  //   },
  //   {
  //     title: "Revenue",
  //     value: "$56,789",
  //     icon: "💰",
  //     bgColor: "bg-green-500",
  //   },
  //   {
  //     title: "Orders",
  //     value: "987",
  //     icon: "📦",
  //     bgColor: "bg-purple-500",
  //   },
  //   {
  //     title: "Feedback",
  //     value: "321",
  //     icon: "💬",
  //     bgColor: "bg-yellow-500",
  //   },
  // ];
  return (
    <section className="w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      <Heading desc={'Find Out'}  t1={'Why Choose '} imp={' Travel Vista'}></Heading>
       <div className="">
       <div className="grid my-10 grid-cols-1 gap-10 w-[90%] md:w-[60%] mx-auto lg:w-[100%]  :grid-cols-2 lg:grid-cols-3 p-4">
      {data.map((stat, index) => (
        <div
          key={index}
          className={`flex z-40 relative items-center p-10 ${stat.bg}   rounded-lg shadow-lg`}
        >
          <div className=" w-28 z-0 h-28 border-t border-l border-sky-500 - absolute -top-5 -left-5"></div>
          <div className=" w-28 z-0 h-28 border-t border-l border-sky-500 -rotate-180 absolute -bottom-5 -right-8"></div>
          <img className=" mr-3 w-10 h-10  text-black " src={stat?.icon} alt="" />
          <div>
            <h3 className=" text-base md:text-lg font-bold">{stat?.title}</h3>
            <p className="text-2xl font-bold">{stat?.value}</p>
          </div>
        </div>
      ))}
    </div>
  
       </div>
    </section>
  );
};

export default WhyChooseUs;