'use client'
import useLoadPopularTourData from "@/hooks/useLoadPopularTourData";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './PopularTour.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Heading from "@/components/reuseble/Heading";
import Image from "next/image";


const PopularTour = () => {
  const popularTour = useLoadPopularTourData()

  return (
   <section>
    <Heading t1={'Popular '}  imp={' Destinations'} ></Heading>
   <div>
   <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
        {popularTour?.map((tour,index)=>  <SwiperSlide className=" rounded-full" key={index}>
         <div className=" rounded-full max-w-[290px] w-full h-full max-h-[290px]">
         <img className=" rounded-full l min-w-[290px] min-h-[290px] " src={tour?.image} alt={tour?.country} ></img>
         </div>
        </SwiperSlide>)}
      </Swiper>
   </div>
   </section>
  );
};

export default PopularTour;