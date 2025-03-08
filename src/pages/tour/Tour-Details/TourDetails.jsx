/* eslint-disable @next/next/no-img-element */
"use client";

import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import swal from "sweetalert"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSession } from "next-auth/react";


const TourDetails = ({ id }) => {
  // state to handle tour data
  const [tour, setTour] = useState();
  // state to handle book form 
  const [showBookingForm,setShowBookingForm] = useState(false)
  const [date, setDate] = useState(null);
  const [travelers, setTravelers] = useState(1);
  const [packageType, setPackageType] = useState("Standard");
 // get user
 const {user} = useSession()?.data||{} 

  const [roomDetailsModal, setRoomDetailsModal] = useState(false)
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/tours/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res?.data?.result);
      setTour(res?.data?.result);
    });
  }, [id, url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      email:user?.email,
      title:tour?.title,
      price:tour?.price,
      date,
      travelers,
      status:"pending"
    }
    console.log(bookingDetails)
    const formattedDate = date ? date?.toISOString()?.split("T")[0] : "No date selected";
    axios.post(`${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/bookings`,bookingDetails)
    .then(res=>{
      console.log(res.data)
      if(res.data?.data?.insertedId){
           swal(`Booking confirmed! Date: ${formattedDate}, Travelers: ${travelers}, Package: ${packageType}`,"","success");
           setShowBookingForm(false)
           return
      }
      if(res.data?.message=="This tour is already exist in booking"){
           swal(`This tour is already exist in booking`,"","error");
           return
      }
    })
 
  };

  // return loading spinner if there is no data available
  if (!tour) return <LoadingSpinner></LoadingSpinner>;

  return (
    <section className=" w-[94%] box-border my-10 md:w-[90%] lg:w-[85%] mx-auto">
      {roomDetailsModal ? (
        <section className="  lg:h-[calc(100dvh-100px)] flex gap-5 flex-col justify-between w-full border shadow p-5"> 
        {/* title and desc section */}
          <section className=" relative">
            <div>
              <h3 className=" text-lg md:text-xl font-semibold">{tour?.room?.title}</h3>
              <p className=" text-sm md:text-base  font-medium">{tour?.room?.description}</p>
            </div>
            <button onClick={()=>setRoomDetailsModal(false)} title="close!" className=" absolute -right-2 -top-2 text-lg font-light">X</button>
          </section>
          {/* images section */}
          <section className=" flex flex-col lg:flex-row gap-10 w-full">
            {tour?.room?.images?.map((room_imgs,index)=><img key={index} src={room_imgs} alt="" className=" w-full max-w-full  xl:h-[350px] lg:h-[280px] md:h-[280px] h-[150px] " />)}
            
          </section>
         
        </section>
      ) : (
        showBookingForm ? 
            <div className="flex justify-center items-center min-h-[calc(100dvh-400px)]">
              <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl border">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Book Your Trip</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-sm font-semibold mb-1">Select Date</label>
                    <DatePicker 
                      selected={date} 
                      onChange={(date) => setDate(date)} 
                      className="w-full border rounded-lg p-2"
                      placeholderText="Select a date"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm font-semibold mb-1">Number of Travelers</label>
                    <input
                      type="number"
                      min="1"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm font-semibold mb-1">Select Package</label>
                    <select
                      value={packageType}
                      onChange={(e) => setPackageType(e.target.value)}
                      className="w-full border rounded-lg p-2"
                    >
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Book Now
                  </button>
                </form>
              </div>
            </div> :<div className=" rounded-e-md relative flex flex-col md:flex-row gap-5 md:gap-10 w-full border shadow-lg bg-base-300 bg-opacity-10 min-h-[300px] h-full">
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
                Price: <span className=" text-[#2bbfc4]">{tour?.price}$</span>
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
              <button onClick={()=>setShowBookingForm(true)} className=" btn-primary ">
                Book Now
              </button>
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
