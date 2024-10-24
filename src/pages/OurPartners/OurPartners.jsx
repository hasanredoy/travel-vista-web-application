import DataLoader from "@/hooks/data-loader/DataLoader";

const OurPartners =async () => {
  const ourPartners = await DataLoader('our-partners')
  return (
    <div>
      
    </div>
  );
};

export default OurPartners;