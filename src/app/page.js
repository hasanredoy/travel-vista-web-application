
import Categories from "@/pages/home/Categories/Categories";
import Discount from "@/pages/home/Discount/Discount";
import Featured from "@/pages/home/FeaturedTour/Featured";
import Hero from "@/pages/home/Hero/Hero";
import NewsLetter from "@/pages/home/Newsletter/NewsLetter";
import PopularTour from "@/pages/home/PopularTour/PopularTour";
import Testimonial from "@/pages/home/Testimonial/Testimonial";
import WhyChooseUs from "@/pages/home/why-choose-us/WhyChooseUs";
import OurPartners from "@/pages/home/OurPartners/OurPartners";
import FAQ from "@/pages/home/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Featured></Featured>
      <Discount></Discount>
      <PopularTour></PopularTour>
      <WhyChooseUs></WhyChooseUs>
      <Categories></Categories>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <OurPartners></OurPartners>
        <NewsLetter></NewsLetter>
    </main>
  );
}
