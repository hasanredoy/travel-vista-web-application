'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadTestimonial from "@/hooks/testimonial/useLoadTestimonial";

const Testimonial = () => {
  const testimonials = useLoadTestimonial()
  console.log(testimonials);
  return (
    <section className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Hear About '} imp={' Us'} ></Heading>
    </section>
  );
};

export default Testimonial;