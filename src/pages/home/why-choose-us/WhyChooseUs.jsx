'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadWhyChooseUsData from "@/hooks/why-choose-us/useLoadWhyChooseUsData";

const WhyChooseUs = () => {
  const data = useLoadWhyChooseUsData()
  return (
    <div>
      <Heading t1={'Why Choose'} imp={'Travel Vista'}></Heading>
      
    </div>
  );
};

export default WhyChooseUs;