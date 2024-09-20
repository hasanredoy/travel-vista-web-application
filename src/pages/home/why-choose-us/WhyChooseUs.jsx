'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadWhyChooseUsData from "@/hooks/why-choose-us/useLoadWhyChooseUsData";

const WhyChooseUs = () => {
  const data = useLoadWhyChooseUsData()
  return (
    <section>
      <Heading desc={'Find Out'}  t1={'Why Choose '} imp={' Travel Vista'}></Heading>
       <div>

       </div>
    </section>
  );
};

export default WhyChooseUs;