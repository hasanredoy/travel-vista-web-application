"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import Pagination from "@/components/reuseble/Pagination";
import useLoadCount from "@/hooks/useLoadCount";
import useLoadUserRole from "@/hooks/user-role/useLoadUserRole";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AllUsers() {
  // state to handle users
  const [users, setUsers] = useState([]);
  // state to handle page 
  const [currentPage, setCurrentPage] = useState(0);
  
// state for filter 
const [filter,setFilter] = useState('')

  // get user
  const { user } = useSession()?.data || {};

  // load users count
  const count = useLoadCount("users/count");
  // get user role
  const role = useLoadUserRole();
  console.log(role);

  // effect to load users data
  useEffect(() => {
    axios
      .get(
        `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/users?page=${currentPage}&size=${6}&filter=${filter}`
      )
      .then((res) => {
        console.log(res.data);
        setUsers(res.data?.data);
      });
  }, [currentPage,filter]);

  // handler to  make admin
  const handleMakeAdmin = () => {};
  // handler to delete user
  const handleDelete = () => {};
console.log(filter)
  return users?.length > 0 ? (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className=" flex justify-between">
          <h1 className="text-3xl font-bold mb-6">All Users</h1>
          <select onChange={(e)=>setFilter(e.target.value)} className="select join-item">
            <option disabled selected>
              Filter
            </option>
            <option value={'user'}>User&apos;s</option>
            <option value={'host'}>Host&apos;s</option>
            <option value={'admin'}>Admin&apos;s</option>
          </select>
        </div>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600"></th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the users array */}
              {users?.map((User) => (
                <tr key={User.id} className="border-b">
                  <td className="px-6 py-4">
                    <Image
                      src={
                        User?.image ||
                        "https://randomuser.me/api/portraits/men/1.jpg"
                      }
                      alt={`${User?.name} Image`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">{User?.name}</td>
                  <td className="px-6 py-4">{User?.email}</td>
                  <td className="px-6 py-4 flex items-center gap-4">
                    <div>
                      {user?.email == "hossainhasanredoy@gmail.com" ? (
                        <button
                          onClick={() => handleMakeAdmin(User?._id)}
                          className=" bg-gray-200 text-black py-0.5 hover:bg-gray-600 hover:text-white px-4 rounded-md"
                        >
                          Make Admin
                        </button>
                      ) : (
                        <span>{role}</span>
                      )}
                    </div>
                    <div>
                      {User?.type !== "admin" ? (
                        <button
                          onClick={() => handleDelete(User?._id)}
                          className=" bg-red-500 text-white py-0.5 hover:bg-gray-200 hover:text-red-600 px-4 rounded-md"
                        >
                          Delete
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* pagination section  */}
          <section className=" my-3">
            <Pagination
              count={count}
              dataPerPage={6}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Pagination>
          </section>
        </div>
      </div>
    </div>
  ) : (
    <div className=" flex justify-center items-center min-h-screen">
      <LoadingSpinner></LoadingSpinner>
      {setTimeout(() => {
        <p className="text-gray-600">No Users.</p>;
      }, 2000)}
    </div>
  );
}
