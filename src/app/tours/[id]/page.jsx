'use client'
import TourDetails from "@/pages/tour/Tour-Details/TourDetails";
import { useParams } from "next/navigation";

const Page = () => {
  const {id} = useParams()
    
  return <TourDetails id={id}></TourDetails>
};

export default Page;