import Discount from "@/pages/home/Discount/Discount";
import Featured from "@/pages/home/FeaturedTour/Featured";
import Hero from "@/pages/home/Hero/Hero";
import PopularTour from "@/pages/home/PopularTour/PopularTour";
import WhyChooseUs from "@/pages/home/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Featured></Featured>
      <Discount></Discount>
      <PopularTour></PopularTour>
      <WhyChooseUs></WhyChooseUs>

    </main>
  );
}
