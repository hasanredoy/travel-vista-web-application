"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import swal from "sweetalert";

const StartHosting = () => {
  // state for host status
  const [status, setStatus] = useState("");

  // get user
  const { user } = useSession()?.data || {};

  useEffect(() => {
    const emptyObject = {};
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/hosts?email=${user?.email}`,
        emptyObject
      )
      .then((res) => {
        setStatus(res?.data?.status);
      });
  }, [user]);
  console.log(status);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const hostInfo = {
      name: form.name.value,
      email: user?.email,
      image: user?.image,
      host_location: form.location.value,
      about_host: form.about_host.value,
      status: "Pending",
    };
    console.log(hostInfo);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hosts`, hostInfo)
      .then((res) => {
        console.log(res?.data);
        if (res?.data?.data.insertedId) {
          swal("We will review your information soon.", "", "success");
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#d2f3ef] via-[#f8f2f2] to-[#f7f7f7] p-6">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl p-10 grid lg:grid-cols-2 gap-10">
        {/* Hero Section */}
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Start Hosting with Travel Vista
          </h2>
          <p className="text-gray-600 text-lg">
            Earn money by hosting travelers from around the world. Our secure
            and easy-to-use platform helps you get started in just a few steps.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#00dbe2]" /> Easy listing setup
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#00dbe2]" /> Secure payment system
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-[#00dbe2]" /> 24/7 customer support
            </li>
          </ul>
        </div>

        {/* Hosting Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Become a Host
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="w-full p-4 border rounded-lg  "
            />
            <input
              type="email"
              placeholder="Email Address"
              defaultValue={user?.email}
              className="w-full p-4 border rounded-lg  "
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              className="w-full p-4 border rounded-lg  "
            />
            <textarea
              rows="4"
              name="about_host"
              placeholder="Describe yourself"
              className="w-full p-4 border rounded-lg  "
            ></textarea>
            <div className=" flex justify-center">
              <button
                disabled={status == "Pending"}
                type="submit"
                className=" btn-primary"
              >
                {status == "rejected"
                  ? "Request Another"
                  : status == "Pending"
                  ? "Request Under Review"
                  : "Start Hosting"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartHosting;
