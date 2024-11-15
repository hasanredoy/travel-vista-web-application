/* eslint-disable @next/next/no-img-element */
"use client";
import Heading from "@/components/reuseble/Heading";
import useLoadTestimonial from "@/hooks/testimonial/useLoadTestimonial";
import React, { useRef, useState } from "react";

import Slider from "react-slick";

import moment from "moment";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  // get testimonials
  const testimonials = useLoadTestimonial();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={"Hear About "} imp={" Us"}></Heading>
      <section className="mx-auto slider-container">
      {/* <Carousel
          className="pb-8 mx-20"
          responsive={responsive}
          swipeable={true}
          draggable={true}
          // showDots={true}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={2000}
          // autoPlay={true}
          keyBoardControl={true}
          customTransition="all .10"
          transitionDuration={1600}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          customDot={false}
          itemClass="carousel-item-padding-40-px"
        
          >
          {testimonials?.map((testimonial, index) => (
            <div className={``} key={index}>
              <div className="container bg-base-200 bg-opacity-10 shadow-md border flex flex-col w-full  max-w-lg p-6 mr-5 mx-auto divide-y rounded-md divide-gray-300 max-h-[260px]  lg:min-h-[260px] ">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src={testimonial?.image}
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial?.name}</h4>
                      <p className=" text-green-500">
                        {" "}
                        {moment(testimonial?.date).startOf("seconds").fromNow()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">
                      {testimonial?.rating}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                  <p className=" text-base font-medium">
                    {testimonial?.testimonial}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel> */}
         <Slider {...settings}>
         {testimonials?.map((testimonial, index) => (
            <div className={``} key={index}>
              <div className="container bg-base-200 bg-opacity-10 shadow-md border flex flex-col w-full  max-w-lg p-6 mr-5 mx-auto divide-y rounded-md divide-gray-300 max-h-[260px]  lg:min-h-[260px] ">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src={testimonial?.image}
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial?.name}</h4>
                      <p className=" text-green-500">
                        {" "}
                        {moment(testimonial?.date).startOf("seconds").fromNow()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">
                      {testimonial?.rating}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                  <p className=" text-base font-medium">
                    {testimonial?.testimonial}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
      </section>
    </section>
  );
};

export default Testimonial;
