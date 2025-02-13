"use client";
import axios from "axios";
/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const ProfilePage = () => {
  // state to disable save button 
  const [disableSaveBtn, setDisableSaveBtn]= useState(true)
  // state to edit user bio 
  const [editUserBio, setEditUserBio] = useState(false);
  // get user
  const { user } = useSession()?.data || {};

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user-info`, {
        email: user?.email,
      })
      .then((res) => {
        setUserInfo(res.data?.data);
      });
  }, [user]);

  return (
    <div className="min-h-screen bg-[#b8f3f51e] py-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-[0_0_15px_rgba(184,243,245,0.3)]  pb-0 pl-8 pt-6 pr-8">
        {/* Profile Header */}
        <div className="text-center">
          <img
            src={user?.image}
            alt={user?.name}
            className="w-32 h-32 rounded-full mx-auto border-4 border-[#b8f3f5] shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            {user?.name}
          </h1>
      <div className={` justify-center flex mt-2 gap-2 ${editUserBio ? "block" : "hidden"}`}>
      <input
            type="text"
            defaultValue={userInfo?.bio}
            onChange={()=>setDisableSaveBtn(false)}
            className={`${editUserBio ? "block" : "hidden"} w-full max-w-[605px] outline-none focus:outline-1 outline-gray-200 px-2 rounded-md`}
          />
          <MdCancel className=" text-xl text-red-500 cursor-pointer" onClick={() => setEditUserBio(!editUserBio)} />
      </div>
          <p
            className={`text-gray-600 italic mt-2 flex gap-2 items-center justify-center ${
              editUserBio && "hidden"
            }`}
          >
            {userInfo?.bio}{" "}
            <FaPen className=" cursor-pointer" onClick={() => setEditUserBio(!editUserBio)} />
          </p>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">Blogs</h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">
              {userInfo?.blogsCount}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">Reviews</h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">
              {userInfo?.reviewsCount}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">Reactions</h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">
              {userInfo?.reactionsGained}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-[0_0_10px_rgba(184,243,245,0.3)] hover:shadow-[0_0_15px_rgba(184,243,245,0.5)] transition-shadow">
            <h2 className="text-lg font-semibold text-gray-700">
              Destinations
            </h2>
            <p className="text-2xl font-bold text-[#0d9488] mt-2">
              {userInfo?.destinationCovered}
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-[#b8f3f5] bg-opacity-30 p-6 rounded-lg shadow-[0_0_10px_rgba(184,243,245,0.3)]">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <div className={` justify-center flex mt-2 gap-2 ${editUserBio ? "block" : "hidden"}`}>
      <textarea
            type="text"
            defaultValue={userInfo?.about}
            onChange={()=>setDisableSaveBtn(false)}
            className={`${editUserBio ? "block" : "hidden"} w-full outline-none focus:outline-1 outline-gray-200 px-2 rounded-md`}
          />
          <MdCancel className=" text-xl text-red-500 cursor-pointer" onClick={() => setEditUserBio(!editUserBio)} />
      </div>
          <p
            className={`text-gray-600  flex gap-2  justify-center ${
              editUserBio && "hidden"
            }`}
          >
            {userInfo?.about}{" "}
            <FaPen className=" cursor-pointer" onClick={() => setEditUserBio(!editUserBio)} />
          </p>
        </div>
        <div className={` ${!editUserBio&&"hidden"}  flex gap-4 justify-end w-full mt-3`}>
          <button className=" ">Cancel</button>
          <button disabled={disableSaveBtn} className=" py-1 px-4 border rounded-md text-white bg-green-500">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
