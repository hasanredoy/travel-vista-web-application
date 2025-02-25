/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const MyTours = () => {
  const [tours, setTours] = useState([
    {
      data_id: "020",
      title: "Patagonia, Chile",
      destination: "Patagonia",
      village_or_city: "Region",
      description: "Explore the dramatic landscapes, glaciers, and mountain ranges of Patagonia.",
      package_duration: "10 days",
      price: 4500,
      rating: "4.9",
      max_capacity: "10 people",
      room_type: "Eco Lodge",
      room: {
        images: [
          "https://img.freepik.com/premium-photo/nice-warm-interior-mountain-wooden-lodge-bedroom-fox-glacier-lodge-fox-glacier-west-coast-south_662214-346831.jpg?w=826",
          "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        title: "Eco Adventure Lodge",
        description: "An eco-friendly lodge immersed in the wild Patagonian landscape."
      },
      country: "Chile",
      user_review_count: 3,
      image: "https://images.pexels.com/photos/29008783/pexels-photo-29008783/free-photo-of-hiker-at-sunrise-in-torres-del-paine-chile.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mountain_Escapes"
    },
    {
      data_id: "021",
      title: "Swiss Alps Adventure",
      destination: "Swiss Alps",
      village_or_city: "Resort Town",
      description: "Experience the breathtaking mountains and ski resorts of the Swiss Alps.",
      package_duration: "7 days",
      price: 5200,
      rating: "4.8",
      max_capacity: "15 people",
      room_type: "Luxury Chalet",
      room: {
        images: [
          "https://images.pexels.com/photos/753276/pexels-photo-753276.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/3761503/pexels-photo-3761503.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        title: "Swiss Luxury Chalet",
        description: "A luxurious stay with breathtaking views of the Alps."
      },
      country: "Switzerland",
      user_review_count: 5,
      image: "https://images.pexels.com/photos/753276/pexels-photo-753276.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mountain_Escapes"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch user tours
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-tours`)
  //     .then((res) => {
  //       setTours(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching tours:", err);
  //       setLoading(false);
  //     });
  // }, []);

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
        await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/delete-tour/${tourId}`);
        setTours(tours.filter((tour) => tour._id !== tourId));
        swal("Tour deleted successfully!", "", "success");
      } catch (error) {
        console.error("Error deleting tour:", error);
        swal("Failed to delete tour", "", "error");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
    <motion.h2 
      className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      My Tours
    </motion.h2>

    {tours.length === 0 ? (
      <motion.p 
        className="text-center text-gray-500 text-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        You havent added any tours yet.
      </motion.p>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {tours.map((tour) => (
            <motion.div
              key={tour.data_id}
              className="relative bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-900">{tour.title}</h3>
                <p className="text-gray-600 text-sm">{tour.destination}, {tour.country}</p>
                <p className="text-gray-700 mt-2">{tour.description.substring(0, 100)}...</p>
                <p className="text-blue-500 font-bold mt-2">${tour.price} | {tour.package_duration}</p>
                <p className="text-sm text-gray-500">⭐ {tour.rating} | Max Capacity: {tour.max_capacity}</p>

                <div className="mt-4 flex justify-between items-center">
                  <motion.button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm shadow-md hover:bg-blue-600 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(tour.data_id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm shadow-md hover:bg-red-600 transition"
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
