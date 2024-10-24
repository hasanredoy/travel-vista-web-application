import DataLoader from "@/hooks/data-loader/DataLoader";

const OurPartners =async () => {
  const ourPartners = await DataLoader('our-partners')
  // console.log({ourPartners});
  return (
    <div>
      
    </div>
  );
};

export default OurPartners;