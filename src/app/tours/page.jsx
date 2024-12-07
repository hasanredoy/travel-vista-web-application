import Tours from "@/pages/tour/Tours";
import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

const page = () => {
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

export default page;
