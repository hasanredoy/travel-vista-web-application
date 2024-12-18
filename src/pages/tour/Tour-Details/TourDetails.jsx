/* eslint-disable @next/next/no-img-element */
"use client";

import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";

const TourDetails = ({ id }) => {
  // state to handle tour data
  const [tour, setTour] = useState();
  const [roomDetailsModal, setRoomDetailsModal] = useState(false);

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/tours/${id}`;
  console.log(url);
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res?.data?.result);
      setTour(res?.data?.result);
    });
  }, [id, url]);

  // return loading spinner if there is no data available
  if (!tour) return <LoadingSpinner></LoadingSpinner>;

  return (
    <section className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      {roomDetailsModal ? (
        <section className=" h-[calc(100dvh-200px)] flex  flex-col-reverse w-full border shadow">
          {/* images section */}
          <section className=" flex gap-10">
            {tour?.room?.images?.map((room_imgs,index)=><img key={index} src={room_imgs} alt="" className=" w-full h-[300px]" />)}
            
          </section>
          {/* title and desc section */}
          <section>
            <div>
              <h3>{tour?.room?.title}</h3>
              <p>{tour?.room?.description}</p>
            </div>
          </section>
        </section>
      ) : (
        <div className=" rounded-e-md relative flex flex-col md:flex-row gap-5 md:gap-10 w-full border shadow-lg bg-base-300 bg-opacity-10 min-h-[300px] h-full">
          {/* image section  */}
          <section className=" flex-1  p-5">
            <img
              src={tour?.image}
              alt={tour?.title}
              className=" w-full md:h-[330px] lg:h-[400px]"
            />
          </section>
          {/* texts and others section  */}
          <section className=" flex-1  p-5  relative overflow-hidden ">
            <div>
              <h1 className=" pb-3 text-xl font-bold">{tour?.title}</h1>
              <p className=" ">{tour?.description}</p>
            </div>
            <div className=" my-3 mb-6">
              <h3 className=" text-base font-medium pb-3 ">
                Price: <span className=" text-[#2bbfc4]">{tour?.price}</span>
              </h3>
              <h3 className=" text-base font-medium ">
                Duration:{" "}
                <span className=" text-[#2bbfc4]">
                  {tour?.package_duration}
                </span>
              </h3>
            </div>
            <div className=" my-3 mb-6">
              <h3 className=" text-base font-medium pb-3 flex gap-2 ">
                Rating:{" "}
                <span className=" text-[#ddcf0a] flex gap-2 items-center">
                  {tour?.rating}
                  <FaStar></FaStar>
                </span>
              </h3>
              <h3 className=" text-base font-medium ">
                Room Type: <span className=" ">{tour?.room_type}</span>
              </h3>
            </div>
            <h3 className=" text-base font-medium mb-7 flex gap-2 items-center ">
              Rated By: <span>{tour?.user_review_count}</span>{" "}
              <FaUser className=" text-sm"></FaUser>
            </h3>
            <div className=" flex justify-between items-center">
              <Link href={`tours/${tour?.data_id}`} className=" btn-primary ">
                Book Now
              </Link>
              <button
                onClick={() => setRoomDetailsModal(true)}
                className=" btn-primary"
              >
                See Room
              </button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default TourDetails;
