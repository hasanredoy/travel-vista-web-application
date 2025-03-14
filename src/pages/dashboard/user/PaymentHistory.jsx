"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PaymentHistory() {
  // state for payments
  const [payments, setPayments] = useState([]);
// state to refetch data 
const [refetch,setRefetch] =useState(0)

    // state to show no data available message 
    const [showMessage, setShowMessage] = useState(false);

  const { user } = useSession()?.data || {};
  // effect to load user payments
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment?email=${user?.email}`
      )
      .then((res) => {
        console.log(res.data);
        setPayments(res.data?.data);
      });
  }, [user,refetch]);

  // handler for clear payments 
  const handleClearPayments = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to clear your payment history!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment?email=${user?.email}`)
      .then((res) => {
        if (res.data?.data?.modifiedCount > 0) {
          swal("All Payment History Cleared", "", "success");
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

  // effect to handle loading spinner and no data message
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true); // Update state after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return payments.length>0? (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className=" flex justify-between">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Payment History
        </h1>
        <button
          onClick={handleClearPayments}
          className="btn text-red-600 font-bold"
        >
          Clear All
        </button>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full border border-gray-300 border-collapse rounded-t-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#8bf1f5] text-gray-800 border border-gray-300 rounded-t-2xl">
              <th className="p-3 text-left border border-gray-300">
                TransactionID
              </th>
              <th className="p-3 text-left border border-gray-300">
                Payed Amount
              </th>
              <th className="p-3 text-left border border-gray-300">Date</th>
              <th className="p-3 text-left border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr
                key={payment?._id}
                className="border border-gray-300 hover:bg-gray-50"
              >
                <td className="p-3 border border-gray-300 text-blue-400">
                  {payment?.transactionID}
                </td>
                <td className="p-3 border border-gray-300 text-green-500 font-bold">
                  {payment?.totalPrice ? (
                    <span>{payment?.totalPrice} $</span>
                  ) : (
                    ""
                  )}
                </td>
                <td className="p-3 border border-gray-300 text-yellow-400 font-bold">
                  {payment?.paymentDate?.split("T")[0]}
                </td>
                <td className={`p-3 font-semibold border border-gray-300 `}>
                  {payment?.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ): (
    <div className="flex justify-center items-center min-h-screen">
      {!showMessage && <LoadingSpinner />}
      {showMessage && (
        <p className="text-gray-600 text-2xl font-bold">No Payment History.</p>
      )}
    </div>
  );
}
