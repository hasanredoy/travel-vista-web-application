import Tours from "@/pages/tour/Tours";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

export const metadata = {
  title: "Explore Tours",
  description: "Find and book the best tours and experiences around the globe. Adventure awaits with Travel Vista!",
};


const ToursPage = () => {
  return (
    <Suspense
      fallback={
        <div className=" flex justify-center items-center min-h-screen">
          <FaSpinner className=" text-xl animate-spin"></FaSpinner>
        </div>
      }
    >
      <Tours></Tours>
    </Suspense>
  );
};

export default ToursPage;
