import Tours from "@/pages/tour/Tours";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Tours></Tours>
    </Suspense>
  );
};

export default page;