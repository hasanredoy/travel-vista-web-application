/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Autoplay} from "swiper/modules";

import "./hero.css";

const Carousel = () => {
  return (
    <div className=" relative max-w-[310px] md:max-w-[350px] lg:max-w-[600px] h-[320px] md:h-[320px] lg:h-[400px] ">
      <h1 className=" hidden  md:text-lg lg:text-2xl items-center md:flex capitalize justify-center w-full font-black text-center  text-white ">
        Travel the World !
      </h1>

      <Swiper
      title="Slide>>>>"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt="swiper"
            className=" w-full  h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]"
            src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="   h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]  w-full"
            src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?t=st=1726042587~exp=1726046187~hmac=580804b32bd7c177d51d02f2f3237cd7f20fe137001e37c001936379debffe74&w=740"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="   h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]  w-full"
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />{" "}
          {/*switzerland */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="   h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]  w-full"
            src="https://img.freepik.com/free-photo/mountains-lake_1398-2285.jpg?t=st=1726045008~exp=1726048608~hmac=ca4eef0a168dd2d260290ca079abebb89638b1553b9ce8c96abdea8d41ad5e50&w=740"
          />
          {/*russia*/}
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="   h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]"
            src="https://img.freepik.com/free-photo/long-straight-road-winter_335224-668.jpg?t=st=1726045109~exp=1726048709~hmac=b55c7727d308889270cd12a9d08e082be494feea4633ca5da7c96afe2f45d820&w=826"
          />
          {/*new zeeland*/}
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="  h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]  w-full "
            src="https://img.freepik.com/free-photo/dramatic-coastline-with-crashing-waves-towering-cliffs_9975-33133.jpg?t=st=1726045223~exp=1726048823~hmac=f8f2bc33dc4f580a2109e1d49e6700c052d547c72ef38a70dec33ead017f15db&w=826"
          />
          {/*australia*/}
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="   h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]  w-full"
            src="https://img.freepik.com/free-photo/rest-sunshine-atoll-bungalow-holiday_1232-3876.jpg?t=st=1726045347~exp=1726048947~hmac=e2aec77dc0e10b0fedd163582e6bfcfe75d2d3cde3a6012ccbe839eb9ddef1f9&w=740"
          />
          {/*maldaves*/}
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="   h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]  w-full"
            width={400}
            height={400}
            src="https://img.freepik.com/free-photo/great-wall_1359-1016.jpg?t=st=1726045405~exp=1726049005~hmac=95bd6ffe1593f4e5f2745f957089458efdf4387ce42b9aadbdf4ba0a7da88ebd&w=740"
          />
          {/*china*/}
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="swiper"
            className="   h-[250px] max-h-[250px] md:h-[280px] md:max-h-[280px] lg:h-[300px] lg:max-h-[300px]  w-full"
            src="https://img.freepik.com/free-photo/beautiful-view-remarkables-mountain-range-queenstown-new-zealand_181624-45497.jpg?t=st=1726045471~exp=1726049071~hmac=f8dcd71ac7fb8da4c080ed2aac564976510788dfc59c160aacc04aca218b848b&w=740"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
