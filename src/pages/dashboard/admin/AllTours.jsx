"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import Pagination from "@/components/reuseble/Pagination";
import useLoadToursData from "@/hooks/tors-data/useLoadToursData";
import useLoadCount from "@/hooks/useLoadCount";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaStar,
} from "react-icons/fa";

export default function AllTours() {
  // call tours count
  const toursCount = useLoadCount("tours/count");
  // state to handle current page
  const [currentPage, setCurrentPage] = useState(0);
  const tours = useLoadToursData("", "", "", currentPage);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true); // Update state after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return tours?.length > 0 ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100 min-h-screen flex flex-col items-center"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-gray-800 mb-6"
      >
        All Tours
      </motion.h1>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours?.map((tour, index) => (
            <motion.div
              key={tour?.data_id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-4 rounded-2xl shadow-md max-w-sm"
            >
              <Image
                src={tour?.image}
                alt={tour?.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {tour?.title}
              </h2>
              <p className="text-gray-600 flex items-center">
                <FaMapMarkerAlt className="text-[#8bf1f5] mr-2" />{" "}
                {tour?.destination}, {tour?.country}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaClock className="text-[#8bf1f5] mr-2" />{" "}
                <strong>Duration:</strong> {tour?.package_duration}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaDollarSign className="text-[#8bf1f5] mr-2" />{" "}
                <strong>Price:</strong> ${tour?.price}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaStar className="text-[#8bf1f5] mr-2" />{" "}
                <strong>Rating:</strong> {tour?.rating} ⭐ (
                {tour?.user_review_count} reviews)
              </p>
              <p className="text-gray-600 flex items-center">
                <FaUsers className="text-[#8bf1f5] mr-2" />{" "}
                <strong>Max Capacity:</strong> {tour?.max_capacity}
              </p>
              <div className=" flex justify-between items-center">
                <Link href={`/tours/${tour?._id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 bg-[#8bf1f5] text-gray-800 font-semibold px-4 py-2 rounded-lg"
                  >
                    View Details
                  </motion.button>
                </Link>{" "}
                <Link href={`/dashboard/listed_tour/${tour?._id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary mt-4"
                  >
                    Edit
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>{" "}
        {/* pagination section  */}
        <section className=" my-3">
          <Pagination
            count={toursCount}
            dataPerPage={6}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></Pagination>
        </section>
      </section>
    </motion.div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
    {!showMessage&&<LoadingSpinner />}
    {showMessage && <p className="text-gray-600 text-2xl font-bold">No Tour Available.</p>}
  </div>
  );
}
