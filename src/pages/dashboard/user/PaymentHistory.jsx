"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PaymentHistory() {
  // state for payments
  const [payments, setPayments] = useState([]);

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
  }, [user]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Payment History
      </h1>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full border border-gray-300 border-collapse rounded-t-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#8bf1f5] text-gray-800 border border-gray-300 rounded-t-2xl">
              <th className="p-3 text-left border border-gray-300">
                Destination
              </th>
              <th className="p-3 text-left border border-gray-300">Payed Amount</th>
              <th className="p-3 text-left border border-gray-300">Date</th>
              <th className="p-3 text-left border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr
                key={payment?.id}
                className="border border-gray-300 hover:bg-gray-50"
              >
                <td className="p-3 border border-gray-300">
                  {payment?.destination}
                </td>
                <td className="p-3 border border-gray-300">
                  {payment?.price}
                </td>
                <td className="p-3 border border-gray-300">{payment?.date}</td>
                <td
                  className={`p-3 font-semibold border border-gray-300 ${
                    payment?.status === "Completed"
                      ? "text-green-600"
                      : payment?.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {payment?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
