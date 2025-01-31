/* eslint-disable @next/next/no-img-element */
"use client"
import { useSession } from 'next-auth/react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Reviews=()=> {
  //  get user from session 
  const {user} = useSession()?.data||{}
  
  return (
    <main className=" min-h-screen my-10  max-w-[90%]  lg:max-w-[85%] mx-auto">
         {/* user info section */}
         <section className=" w-[30%]">
        <div className=" bg-gradient-to-tr from-blue-200 via-sky-200 to-rose-200 p-0.5 max-w-xs rounded-xl ">
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  bg-base-200 ">
            <img
              src={user?.image}
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square border border-sky-400 p-1"
            />
            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  {user?.name}
                </h2>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="GitHub"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaGithub></FaGithub>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaTwitter></FaTwitter>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Email"
                  className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cards section  */}
      <section className=" w-[68%]">
        </section>
    </main>
  )
}

export default Reviews