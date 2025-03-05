"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import Pagination from "@/components/reuseble/Pagination";
import useLoadCount from "@/hooks/useLoadCount";
import useLoadUserRole from "@/hooks/user-role/useLoadUserRole";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import swal from "sweetalert";

export default function AllUsers() {
  // state to handle users
  const [users, setUsers] = useState([]);
  // state to handle page
  const [currentPage, setCurrentPage] = useState(0);

  // state for filter
  const [filter, setFilter] = useState("");

  // state to refetch data
  const [refetch, setRefetch] = useState(0);

  // get user
  const { user } = useSession()?.data || {};

  // load users count
  const count = useLoadCount("users/count");
  // get user role
  const role = useLoadUserRole();

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true); // Update state after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  // effect to load users data
  useEffect(() => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/users?page=${currentPage}&size=${6}&filter=${filter}`
      )
      .then((res) => {
        setUsers(res.data?.data);
      });
  }, [currentPage, filter, refetch]);

  // handler to  make admin
  const handleMakeAdmin = (id, name) => {
    try {
      axios
        .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users?id=${id}`)
        .then((res) => {
          if (res.data?.data?.modifiedCount > 0) {
            setRefetch(refetch + 1);
            return swal(`${name} is now Admin!`, "", "success");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  // handler to delete user
  const handleDelete = (id, name) => {
    try {
      axios
        .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users?id=${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data?.data?.deletedCount > 0) {
            setRefetch(refetch + 1);
            return swal(`${name} is removed.`, "", "success");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return users?.length > 0 ? (
    <div className="bg-gray-100 p-4 sm:p-6">
    <div className="container mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center gap-4 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold">All Users</h1>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="select join-item px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base"
        >
          <option value={""}>
            All
          </option>
          <option value={"user"}>User&apos;s</option>
          <option value={"host"}>Host&apos;s</option>
          <option value={"admin"}>Admin&apos;s</option>
        </select>
      </div>
  
      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full min-w-[600px] table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Image</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Name</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Email</th>
              <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((User, index) => (
              <tr key={index} className="border-b text-xs sm:text-sm">
                <td className="px-4 py-3">
                  <Image
                    src={User?.image || "https://randomuser.me/api/portraits/men/1.jpg"}
                    alt={`${User?.name} Image`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </td>
                <td className="px-4 py-3">{User?.name}</td>
                <td className="px-4 py-3 break-all">{User?.email}</td>
                <td className="px-4 py-3">
                  {User?.email == "hossainhasanredoy@gmail.com" ? (
                    <span className="bg-gray-800 text-white font-bold py-1 px-3 rounded-md">Owner</span>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                      {user?.email == "hossainhasanredoy@gmail.com" ? (
                        <button
                          onClick={() => handleMakeAdmin(User?._id, User?.name)}
                          disabled={User?.type == "admin"}
                          className={`py-1 px-3 rounded-md text-xs sm:text-sm font-medium transition ${
                            User?.type == "admin"
                              ? "bg-gray-800 text-yellow-400 cursor-not-allowed"
                              : "bg-gray-200 text-black hover:bg-gray-800 hover:text-white"
                          }`}
                        >
                          {User?.type == "admin" ? "Admin" : "Make Admin"}
                        </button>
                      ) : (
                        <span>{role}</span>
                      )}
  
                      {User?.type !== "admin" && (
                        <button
                          onClick={() => handleDelete(User?._id)}
                          className="bg-red-600 text-white font-bold py-1 px-3 rounded-md text-xs sm:text-sm hover:bg-gray-200 hover:text-red-600 transition"
                        >
                          Delete
                        </button>
                      )}
  
                      {User?.type == "admin" && user.email == "hossainhasanredoy@gmail.com" && (
                        <button
                          onClick={() => handleDelete(User?._id, User?.name)}
                          className="bg-red-600 text-white font-bold py-1 px-3 rounded-md text-xs sm:text-sm hover:bg-gray-200 hover:text-red-600 transition"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {/* Pagination Section */}
        <section className="my-3 flex justify-center">
          <Pagination count={count} dataPerPage={6} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </section>
      </div>
    </div>
  </div>
  
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      {!showMessage && <LoadingSpinner />}
      {showMessage && (
        <p className="text-gray-600 text-2xl font-bold">No Users.</p>
      )}
    </div>
  );
}
