/* eslint-disable @next/next/no-img-element */
'use client'
import Heading from "@/components/reuseble/Heading";
import useLoadTestimonial from "@/hooks/testimonial/useLoadTestimonial";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonial.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Testimonial = () => {
  const testimonials = useLoadTestimonial()
  console.log(testimonials);
  return (
    <section className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Hear About '} imp={' Us'} ></Heading>
      <section className=" w-[70%] mx-auto">
    
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials?.map((testimonial, index)=><SwiperSlide key={index}>
        <div className="p-6 sm:p-12 ">
	<div className="flex flex-col md:flex-row">
		<div  className="rounded-full  w-20 h-20">
    <img src={testimonial?.image} alt="" className=" w-20 h-20  border " />
    </div>
		<div className="flex flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">{testimonial?.name}</h4>
			<p className="">{testimonial?.testimonial}</p>
		</div>
	</div>
	<div className="flex justify-center pt-4 space-x-4 align-center">

	</div>
</div>
        </SwiperSlide>)}
      </Swiper>
    
      </section>
    </section>
  );
};

export default Testimonial;