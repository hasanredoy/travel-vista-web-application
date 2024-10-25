/* eslint-disable @next/next/no-img-element */
import DataLoader from "@/hooks/data-loader/DataLoader";

const OurPartners =async () => {
  const ourPartners = await DataLoader('our-partners')
  console.log(ourPartners);
  return (
    <section>
      {ourPartners?.data?.map((partner,index)=><div key={index}>
        <img src={partner.logo} alt="" />
      </div>)}
    </section>
  );
};

export default OurPartners;