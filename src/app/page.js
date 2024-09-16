import Discount from "@/pages/home/Discount";
import Featured from "@/pages/home/Featured";
import Hero from "@/pages/home/Hero";
import PopularTour from "@/pages/home/PopularTour";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Featured></Featured>
      <Discount></Discount>
      <PopularTour></PopularTour>
    </main>
  );
}
