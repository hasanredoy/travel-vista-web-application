export default function PaymentHistory() {
  const payments = [
    {
      id: 1,
      destination: "Bali, Indonesia",
      amount: "$1200",
      date: "March 5, 2025",
      status: "Completed",
    },
    {
      id: 2,
      destination: "Paris, France",
      amount: "$1500",
      date: "April 1, 2025",
      status: "Pending",
    },
    {
      id: 3,
      destination: "Tokyo, Japan",
      amount: "$1800",
      date: "May 15, 2025",
      status: "Failed",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Payment History</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full border border-gray-300 border-collapse rounded-t-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#8bf1f5] text-gray-800 border border-gray-300 rounded-t-2xl">
              <th className="p-3 text-left border border-gray-300">Destination</th>
              <th className="p-3 text-left border border-gray-300">Amount</th>
              <th className="p-3 text-left border border-gray-300">Date</th>
              <th className="p-3 text-left border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border border-gray-300 hover:bg-gray-50">
                <td className="p-3 border border-gray-300">{payment.destination}</td>
                <td className="p-3 border border-gray-300">{payment.amount}</td>
                <td className="p-3 border border-gray-300">{payment.date}</td>
                <td className={`p-3 font-semibold border border-gray-300 ${
                  payment.status === "Completed" ? "text-green-600" : 
                  payment.status === "Pending" ? "text-yellow-600" : "text-red-600"
                }`}>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
