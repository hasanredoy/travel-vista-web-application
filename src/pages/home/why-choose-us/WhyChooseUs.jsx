
import useLoadWhyChooseUsData from "@/hooks/why-choose-us/useLoadWhyChooseUsData";

const WhyChooseUs = () => {
  const data = useLoadWhyChooseUsData()
  console.log({data});
  return (
    <div>
      
    </div>
  );
};

export default WhyChooseUs;