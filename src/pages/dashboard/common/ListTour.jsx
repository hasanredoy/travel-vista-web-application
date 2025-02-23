"use client";
/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ListTour() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
      className="container mx-auto p-4 max-w-4xl bg-white shadow-md rounded-lg"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-semibold text-center mb-6 text-gray-800"
        data-aos="fade-down"
      >
        Add a New Tour
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="fade-left">
            <label htmlFor="data_id" className="block text-lg text-gray-700">
              Data ID
            </label>
            <input
              type="text"
              id="data_id"
              name="data_id"
              placeholder="Enter tour data ID"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="100">
            <label htmlFor="title" className="block text-lg text-gray-700">
              Tour Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter tour title"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Enter destination"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Enter village or city"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

   

        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              placeholder="Enter package duration"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="600">
            <label htmlFor="price" className="block text-lg text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter tour price"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="700">
            <label htmlFor="rating" className="block text-lg text-gray-700">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="Enter rating"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Enter maximum capacity"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="fade-left" data-aos-delay="900">
            <label htmlFor="room_type" className="block text-lg text-gray-700">
              Room Type
            </label>
            <input
              type="text"
              id="room_type"
              name="room_type"
              placeholder="Enter room type"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Enter room title"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
       
          <div data-aos="fade-left" data-aos-delay="1200">
            <label htmlFor="country" className="block text-lg text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter country"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="1500">
            <label htmlFor="category" className="block text-lg text-gray-700">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter category"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Double Row Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div data-aos="fade-left" data-aos-delay="1300">
            <label
              htmlFor="user_review_count"
              className="block text-lg text-gray-700"
            >
              User Review Count
            </label>
            <input
              type="number"
              id="user_review_count"
              name="user_review_count"
              placeholder="Enter review count"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="1400">
            <label htmlFor="image" className="block text-lg text-gray-700">
              Tour Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
    
        </div>
             {/* Single Row Textarea */}
             <div data-aos="fade-left" data-aos-delay="400">
          <label htmlFor="description" className="block text-lg text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe the tour"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="1100">
            <label
              htmlFor="room_description"
              className="block text-lg text-gray-700"
            >
              Room Description
            </label>
            <textarea
              id="room_description"
              name="room_description"
              placeholder="Enter room description"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg text-xl hover:bg-blue-600 transition duration-300 mt-6"
        >
          Add Tour
        </button>
      </form>
    </div>
  );
}
