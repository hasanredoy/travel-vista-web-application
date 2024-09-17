"use client";
import useLoadPopularTourData from "@/hooks/useLoadPopularTourData";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';



import Heading from "@/components/reuseble/Heading";

const PopularTour = () => {
  const popularTour = useLoadPopularTourData();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    }
  };
  return (
    <section className="  w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={"Popular "} imp={" Destinations"}></Heading>
      <div className=" mt-10 flex justify-center">
      <Carousel
      className="pb-8 "
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={2000}
  // autoPlay={true}
  keyBoardControl={true}
  
  customTransition="all .10"
  transitionDuration={1600}
  containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  customDot={false}
  itemClass="carousel-item-padding-40-px"
>
{popularTour?.map((tour, index) => (
            <div className=" relative  flex justify-center mx-10" key={index}>
           <Zoom>
           <img
                className=" rounded-full bg-gradient-to-tr   from-[#46f8e0] via-[#e49fff] to-[#fc8ae3] p-1  min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] md:min-w-[290px] md:min-h-[290px] md:max-w-[290px] md:max-h-[290px] "

                src={tour?.image}
                alt={tour?.country}
              >
              </img>
           </Zoom>
                <h3 className=" bottom-0  z-40 left-0 absolute text-xl font-bold ">{tour?.country}</h3>
            </div>
          ))}
</Carousel>
      </div>
   
    </section>
  );
};

export default PopularTour;
