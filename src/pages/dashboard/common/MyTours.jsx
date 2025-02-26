/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";

const MyTours = () => {
  const [tours, setTours] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
const {user}= useSession()?.data||{}
const email = user?.email

  // Fetch user tours
  useEffect(() => {
   if(email){
    axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my_tours`,{email})
    .then((res) => {
      console.log(res.data)
      setTours(res?.data?.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching tours:", err);
      setLoading(false);
    });
   }
  }, [email]);

  // Delete Tour
  const handleDelete = async (tourId) => {
    const confirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you cannot recover this tour!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (confirm) {
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/delete-tour/${tourId}`
        );
        setTours(tours.filter((tour) => tour?._id !== tourId));
        swal("Tour deleted successfully!", "", "success");
      } catch (error) {
        console.error("Error deleting tour:", error);
        swal("Failed to delete tour", "", "error");
      }
    }
  };
if(loading){
  return <LoadingSpinner></LoadingSpinner>
}
  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Tours
      </motion.h2>

      {tours?.length === 0 ? (
        <motion.p
          className="text-center text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          You haven&apos;t added any tours yet.
        </motion.p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {tours?.map((tour,index) => (
              <motion.div
                key={index}
                className="relative bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={tour?.image}
                  alt={tour?.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {tour?.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tour?.destination}, {tour?.country}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {tour?.description.substring(0, 100)}
                    <Link href={tour?._id||""}>
                    ...
                    </Link>
                  </p>
                  <p className="text-sky-400 font-bold mt-2">
                    ${tour?.price} | {tour?.package_duration}
                  </p>
                  <p className="text-sm text-gray-500">
                    ⭐ {tour?.rating} | Max Capacity: {tour?.max_capacity}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <Link href={`dashboard/edit_tour/${tour?._id}`}>
                    <motion.button
                      className="px-4 py-2 bg-sky-400 text-white rounded-lg text-sm shadow-md hover:bg-sky-300 hover:text-black transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      Edit
                    </motion.button>
                    </Link>
                    <motion.button
                      onClick={() => handleDelete(tour?.data_id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm shadow-md hover:bg-red-500 hover:text-black transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      Delete
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default MyTours;
