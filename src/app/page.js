import Discount from "@/pages/home/Discount/Discount";
import Featured from "@/pages/home/FeaturedTour/Featured";
import Hero from "@/pages/home/Hero/Hero";
import PopularTour from "@/pages/home/PopularTour/PopularTour";

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
