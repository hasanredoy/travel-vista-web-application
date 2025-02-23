export default function MyBookings() {
  const bookings = [
    {
      id: 1,
      destination: "Bali, Indonesia",
      date: "March 15, 2025",
      price: 1200,
      status: "Confirmed",
    },
    {
      id: 2,
      destination: "Paris, France",
      date: "April 10, 2025",
      price: 1500,
      status: "Pending",
    },
    {
      id: 3,
      destination: "Tokyo, Japan",
      date: "May 5, 2025",
      price: 1800,
      status: "Cancelled",
    },
  ];

  // Calculate total price
  const totalPrice = bookings.reduce((a, b) => a + b.price, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Bookings</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full border border-gray-300 border-collapse rounded-t-2xl overflow-hidden">
          <thead>
            <tr className="bg-[#8bf1f5] text-gray-800 border border-gray-300 rounded-t-2xl">
              <th className="p-3 text-left border border-gray-300">Destination</th>
              <th className="p-3 text-left border border-gray-300">Date</th>
              <th className="p-3 text-left border border-gray-300">Price</th>
              <th className="p-3 text-left border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border border-gray-300 hover:bg-gray-50">
                <td className="p-3 border border-gray-300">{booking.destination}</td>
                <td className="p-3 border border-gray-300">{booking.date}</td>
                <td className="p-3 border border-gray-300">${booking.price}</td>
                <td className={`p-3 font-semibold border border-gray-300 ${
                  booking.status === "Confirmed" ? "text-green-600" : 
                  booking.status === "Pending" ? "text-yellow-600" : "text-red-600"
                }`}>{booking.status}</td>
              </tr>
            ))}
          </tbody>
      
        </table>
      </div>
      <div className=" flex justify-end mt-4 mr-10 items-center gap-4">
         <h2 className=" text-lg font-bold text-sky-500">Amount: {totalPrice} $</h2>
        <button className=" btn-primary">Pay</button>
        </div>
    </div>
  );
}
