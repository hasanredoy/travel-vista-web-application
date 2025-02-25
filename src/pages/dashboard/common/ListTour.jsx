"use client";
import { usePostImage } from "@/hooks/post-image/usePostImage";
/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import swal from "sweetalert";

export default function ListTour() {
// get user 
const {user} = useSession()?.data||{}


  const [loading,setLoading] = useState(false)
  // state for thumbnail file 
  const [tourThumbnailFile,setTourThumbnailFile] = useState()
  // upload image 
  const tourThumbnail = usePostImage(tourThumbnailFile,setLoading)
  // handler to add new tour 
  const handleAddTour = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Extracting values from the form
    const title = form.title.value.trim();
    const destination = form.destination.value.trim();
    const village_or_city = form.village_or_city.value.trim();
    const description = form.description.value.trim();
    const package_duration = form.package_duration.value.trim();
    const price = parseFloat(form.price.value);
    const max_capacity = form.max_capacity.value.trim();
    const room_type = form.room_type.value.trim();
    const room_title = form.room_title.value.trim();
    const room_description = form.room_description.value.trim();
    const country = form.country.value.trim();
    const category = form.category.value.trim();
    const room_images = form.room_images.value.trim()

    // Basic Validation
    if (
      !title ||
      !destination ||
      !description ||
      !package_duration ||
      !price ||
      !max_capacity ||
      !country
    ) {
      return swal("All fields are required!", "", "error");
    }

    if (price <= 0) {
      return swal("Price must be a positive number", "", "error");
    }

    if (!tourThumbnail) {
      return swal("Please upload an image", "", "error");
    }


    try {


      // Creating Tour Data Object
      const tourData = {
        title,
        destination,
        village_or_city,
        description,
        package_duration,
        price,
        rating:4,
        max_capacity,
         room_type,
        room: {
          images:room_images,
          title: room_title,
          description: room_description,
        },
        country,
        user_review_count:3,
        image: tourThumbnail,
        category,
        date: new Date(),
        host_email:user?.email
      };
      // Sending data to the backend
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/tours`,
        tourData
      );
    console.log(response?.data?.data)
      if (response?.data?.data?.insertedId) {
        swal("Tour Added Successfully!", "", "success");
        form.reset(); // Reset the form after successful submission
      } else {
        swal("Failed to add tour", "", "error");
      }
    } catch (error) {
      console.error("Error adding tour:", error);
      swal("Something went wrong!", "", "error");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing effect
      once: true, // Trigger animation only once
    });
  }, []);


  return (
    <div
      className="container mx-auto p-4 max-w-2xl bg-white shadow-md rounded-lg my-5"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-semibold text-center mb-6 text-gray-800"
        data-aos="fade-down"
      >
        Add a New Tour
      </h2>
      <form onSubmit={handleAddTour} className="space-y-6">
        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="fade-left" data-aos-delay="100">
            <label htmlFor="title" className="block text-lg text-gray-700">
              Tour Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Enter tour title"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <label
              htmlFor="destination"
              className="block text-lg text-gray-700"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              required
              placeholder="Enter destination"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="300">
            <label
              htmlFor="village_or_city"
              className="block text-lg text-gray-700"
            >
              Village or City
            </label>
            <input
              type="text"
              id="village_or_city"
              name="village_or_city"
              required
              placeholder="Enter village or city"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="500">
            <label
              htmlFor="package_duration"
              className="block text-lg text-gray-700"
            >
              Package Duration
            </label>
            <input
              type="text"
              id="package_duration"
              name="package_duration"
              required
              placeholder="Enter package duration"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
        </div>

        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="fade-left" data-aos-delay="600">
            <label htmlFor="price" className="block text-lg text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              placeholder="Enter tour price"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="800">
            <label
              htmlFor="max_capacity"
              className="block text-lg text-gray-700"
            >
              Max Capacity
            </label>
            <input
              type="text"
              id="max_capacity"
              name="max_capacity"
              required
              placeholder="Enter maximum capacity"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
        </div>

        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="fade-left" data-aos-delay="1200">
            <label htmlFor="country" className="block text-lg text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              placeholder="Enter country"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="1400">
            <label htmlFor="image" className="block text-lg text-gray-700">
              Tour Image/ Thumbnail
            </label>
            <input
              type="file"
              id="image"
              required
              onChange={(event) => setTourThumbnailFile(event.target.files[0])}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
        </div>

        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="fade-left" data-aos-delay="1500">
            <label htmlFor="category" className="block text-lg text-gray-700">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              required
              placeholder="Enter category Eg. Desert, Adventure.."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="900">
            <label htmlFor="room_type" className="block text-lg text-gray-700">
              Room Type
            </label>
            <input
              type="text"
              id="room_type"
              name="room_type"
              required
              placeholder="Room type Eg. Luxury Tent, Eco Lodge"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="1000">
            <label htmlFor="room_title" className="block text-lg text-gray-700">
              Room Title
            </label>
            <input
              type="text"
              id="room_title"
              name="room_title"
              required
              placeholder="Enter room title"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="600">
            <label htmlFor="price" className="block text-lg text-gray-700">
              Room Images
            </label>
            <input
              type="url"
              name="room_images"
              required
              placeholder="Enter images of room "
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            />
          </div>

        </div>
        {/* Single Row Textarea */}
        <div data-aos="fade-left" data-aos-delay="1100">
          <label
            htmlFor="room_description"
            className="block text-lg text-gray-700"
          >
            Room Details
          </label>
          <textarea
            id="room_description"
            name="room_description"
            required
            placeholder="Enter details about the room"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            rows="3"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="400">
          <label htmlFor="description" className="block text-lg text-gray-700">
            Tour Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="Describe the tour"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-300"
            rows="4"
          />
        </div>
        <div className=" flex justify-center">
          <button type="submit" className="btn-primary">
            Add Tour
          </button>
        </div>
      </form>
    </div>
  );
}
