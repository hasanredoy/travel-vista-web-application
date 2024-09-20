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
       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {data.map((stat, index) => (
        <div
          key={index}
          className={`flex items-center p-10 ${stat.bgColor}  rounded-lg shadow-lg`}
        >
          <img className=" w-10 h-10 " src={stat?.icon} alt="" />
          <div>
            <h3 className="text-lg font-semibold">{stat?.title}</h3>
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