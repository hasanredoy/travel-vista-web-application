"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import Pagination from "@/components/reuseble/Pagination";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import swal from "sweetalert";

export default function MyBookings() {
  // state to show no data available message 
  const [showMessage, setShowMessage] = useState(false);
  // state for user bookings
  const [bookings, setBookings] = useState([]);

  // state to refetch data
  const [refetch, setRefetch] = useState(0);
  // state for current page
  const [currentPage, setCurrentPage] = useState(0);
  // state for count
  const [count, setCount] = useState(0);
  // get user
  const { user } = useSession()?.data || {};

  // effect to call count
  useEffect(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/count?email=${user?.email}`
      )
      .then((res) => {
        console.log(res.data);
        setCount(res.data?.count);
      });
  }, [user]);

  // effect to call user bookings
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings?email=${
          user?.email
        }&page=${currentPage}&size=${6}`
      )
      .then((res) => {
        setBookings(res.data?.data);
      });
  }, [user, refetch,currentPage]);

  const handleCancelTour = (id) => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/${id}`)
      .then((res) => {
        if (res.data?.data?.modifiedCount > 0) {
          swal("Tour canceled", "", "success");
          setRefetch(refetch + 1);
          return;
        } else {
          swal("Something went wrong.", "", "error");
          return;
        }
      });
  };
  // handler for clear bookings 
  const handleClearBookings = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to clear your bookings!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings?email=${user?.email}`)
      .then((res) => {
        if (res.data?.data?.modifiedCount > 0) {
          swal("All Bookings Cleared", "", "success");
          setRefetch(refetch + 1);
          return;
        } else {
          swal("Something went wrong.", "", "error");
          return;
        }
      });
      }
    });
 
  };


  // Calculate total price
  const totalPrice = bookings
    ?.filter((booking) => booking.status === "pending")
    ?.reduce((a, b) => a + b.price, 0);

  // effect to handle loading spinner and no data message
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true); // Update state after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return bookings.length > 0 ? (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className=" flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          My Bookings
        </h1>
        <div>
          <button onClick={handleClearBookings} className=" btn text-red-600 font-bold">Clear All</button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full border border-gray-300 border-collapse rounded-t-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#8bf1f5] text-gray-800 border border-gray-300 rounded-t-2xl">
              <th className="p-3 text-left border border-gray-300">
                Destination
              </th>
              <th className="p-3 text-left border border-gray-300">Date</th>
              <th className="p-3 text-left border border-gray-300">Price</th>
              <th className="p-3 text-left border border-gray-300">Status</th>
              <th className="p-3 text-left border border-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <tr
                key={booking._id}
                className="border border-gray-300 hover:bg-gray-50"
              >
                <td className="p-3 border border-gray-300 font-semibold">
                  {booking?.title}
                </td>
                <td className="p-3 border border-gray-300  text-yellow-400 font-bold">
                  {booking?.date ? booking?.date?.split("T")[0] : "No date"}
                </td>
                <td className="p-3 border border-gray-300 font-semibold">
                  ${booking?.price}
                </td>
                <td
                  className={`p-3 font-semibold border border-gray-300 ${
                    booking?.status === "confirmed"
                      ? "text-green-600"
                      : booking?.status === "pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {booking?.status}
                </td>
                <td className={`p-3 font-semibold border border-gray-300 `}>
                  {booking?.status == "pending" && (
                    <button
                      onClick={() => handleCancelTour(booking?._id)}
                      className=" text-base rounded-md font-semibold py-1 px-3 bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:font-semibold"
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* section for pagination , total price and pay button  */}
      <section className=" mt-3">
        <Pagination
          count={count}
          dataPerPage={6}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {totalPrice > 0 ? (
          <div className=" flex justify-end mt-4 mr-10 items-center gap-4">
            <h2 className=" text-lg font-bold text-sky-600">
              Amount: {totalPrice} $
            </h2>
            <Link href={"/dashboard/payment"}>
              <button className=" btn-primary">Pay</button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      {!showMessage && <LoadingSpinner />}
      {showMessage && (
        <p className="text-gray-600 text-2xl font-bold">No Bookings.</p>
      )}
    </div>
  );
}
