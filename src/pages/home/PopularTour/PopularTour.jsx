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


const PopularTour = () => {
  const popularTour = useLoadPopularTourData()

  return (
   <section>
    <Heading t1={'Popular '}  imp={' Destinations'} ></Heading>

   </section>
  );
};

export default PopularTour;