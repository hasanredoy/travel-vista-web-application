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
        <div className="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src={testimonial?.image} alt="" className="  w-24 h-24 border " />
		<div className="flex flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">{testimonial?.name}</h4>
			<p className="dark:text-gray-600">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
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