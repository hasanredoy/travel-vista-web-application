/* eslint-disable @next/next/no-img-element */
"use client";
import LoadingSpinner from "@/components/reuseble/LoadingSpinner";
import useReviewsData from "@/hooks/reviews-data/useReviewsData";
import moment from "moment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTrash,
  FaTwitter,
} from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { RiStarSmileFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Rating, ThinStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import swal from "sweetalert";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { MdSentimentNeutral } from "react-icons/md";
import { RiEmotionHappyLine } from "react-icons/ri";
import axios from "axios";
import Pagination from "@/components/reuseble/Pagination";
import useLoadCount from "@/hooks/useLoadCount";
import Link from "next/link";

const Reviews = () => {
  // state for current page
  const [currentPage, setCurrentPage] = useState(0);
  // state for refetch data
  const [refetch, setRefetch] = useState(0);
  // state show  reviews form
  const [showForm, setShowForm] = useState(false);
  // state to show user review
  const [userReview, setUserReview] = useState(false);
  // rating state
  const [rating, setRating] = useState(0);
  // object to style rating stars
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor:
      rating > 0 && rating < 3
        ? "#fd0707"
        : rating === 3
        ? "#3f3a3a"
        : rating > 3
        ? "#ffb700"
        : "#ffb700",
    inactiveFillColor:
      rating > 0 && rating < 3
        ? "#fd07075b"
        : rating === 3
        ? "#3f3a3a23"
        : rating > 3
        ? "#fbf1a9"
        : "#fbf1a9",
  };

  const count = useLoadCount("reviews/count");
  console.log(count);

  // load reviews
  const [reviews, loading] = useReviewsData(refetch, userReview, currentPage);

  //  get user from session
  const { user } = useSession()?.data || {};

  // handler to add review
  const handleAddReview = (e) => {
    e.preventDefault();
    const review = {
      user: user?.name,
      email: user?.email,
      image: user?.image,
      date: new Date(),
      description: e.target.description.value,
      rating,
    };
    if (rating < 1) {
      return swal("Rating required!", "", "error");
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`, review)
      .then((res) => {
        if (res.data?.data?.insertedId) {
          setRefetch(refetch + 1);
          setShowForm(!showForm);
          swal("Review added successfully", "", "success");
        }
        if (res.data?.message) {
          swal("You can only submit one review!", "", "error");
        }
      });
  };
  // handler to delete user review
  const handleDeleteReview = (id) => {
    try {
      swal({
        title: "Are you sure?",
        text: "You wanna Delete your review!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews?id=${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.data?.deletedCount > 0) {
                setRefetch(refetch + 1);
                swal("Review has been deleted!", {
                  icon: "success",
                });
              }
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return showForm ? (
    <section className=" flex justify-center w-full mt-10 ">
      {/* add review form */}
      <form
        onSubmit={handleAddReview}
        className=" max-w-xs md:max-w-md card-body border shadow-xl rounded-lg bg-base-200 bg-opacity-20 border-gray-300 relative mx-4 md:mx-0"
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className=" absolute top-2 right-2"
        >
          <RxCross1 className="text-lg"></RxCross1>
        </button>
        {/* rating inp  */}
        <h4>
          {rating > 0 && rating < 3 ? (
            <span className=" flex gap-1 items-center ml-[26px] md:ml-[88px] text-red-500 font-semibold">
              Unhappy{" "}
              <RiEmotionUnhappyLine className="text-2xl"></RiEmotionUnhappyLine>
            </span>
          ) : (
            ""
          )}
          {rating == 3 && (
            <span className="  flex gap-1 items-center ml-[96px] md:ml-[165px] text-neutral-500 font-semibold">
              Neutral{" "}
              <MdSentimentNeutral className="text-2xl"></MdSentimentNeutral>
            </span>
          )}
          {rating >= 4 && (
            <span className=" flex gap-1 items-center  ml-[166px] md:ml-[240px] text-green-600 font-semibold">
              Happy{" "}
              <RiEmotionHappyLine className="text-2xl"></RiEmotionHappyLine>
            </span>
          )}
        </h4>
        <div className=" flex justify-center  mb-3">
          <Rating
            style={{ maxWidth: 250 }}
            value={rating}
            onChange={setRating}
            itemStyles={myStyles}
          />
        </div>
        {/* description   */}
        <div>
          <textarea
            rows={4}
            name="description"
            className="textarea w-full  textarea-bordered"
            placeholder="Description...."
          ></textarea>
        </div>
        <div className="mt-6 flex justify-center w-full">
          <button className=" btn-primary min-w-32 flex justify-center items-center w-full max-w-32">
            Submit
          </button>
        </div>
      </form>
    </section>
  ) : (
    <main className=" min-h-screen my-10  max-w-[90%]  lg:max-w-[85%] mx-auto flex gap-10">
      {/* user info section */}
      <section className=" hidden md:block  md:w-[40%] lg:w-[30%]">
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
      <section className=" w-full md:w-[58%] lg:w-[68%]">
        {/* sort and add new blog button div  */}
        <div className=" mb-10 ">
          <div className=" flex gap-10">
            {/* add new review button */}
            <button
              onClick={() => setShowForm(!showForm)}
              title="click to add a new review"
              className=" btn flex gap-2 items-center"
            >
              Add New <MdAdd className="text-xl"></MdAdd>{" "}
            </button>
            <button
              title="Click to see your blogs"
              onClick={() => setUserReview(!userReview)}
              className={`btn rounded-xl ${
                userReview ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Your Review
            </button>
          </div>
        </div>
        {userReview && reviews?.length < 1 ? (
          <div className=" flex justify-center ">
            <sapn className="text-lg text-red-600 font-bold">
              You haven&apos;t added a review!
            </sapn>
          </div>
        ) : (
          <>
            {/* cards  */}
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {reviews?.map((review, index) => (
                <div
                  key={index}
                  className="container flex flex-col w-full max-w-lg mx-auto  rounded-md 
          bg-base-200 bg-opacity-20 border border-gray-300 shadow-md relative md:max-w-sm  "
                >
                  {user?.email == review?.email && (
                    <button
                      onClick={() => handleDeleteReview(review?._id)}
                      className=" absolute top-1 hover:text-gray-600 right-1 z-20 text-red-600 "
                    >
                      <FaTrash></FaTrash>
                    </button>
                  )}
                  <div className="p-4">
                    <div className="text-base">
                      <p>{review?.description}</p>
                    </div>
                    <div
                      className={`border border-gray-300 ${
                        review.description.length < 100 ? "mb-6" : "mb-2"
                      } mt-4`}
                    ></div>
                    <Link href={`/dashboard/user/${review?._id}`} className="flex space-x-4">
                      <div>
                        <Image
                          src={review?.image}
                          alt="user image"
                          width={48}
                          height={48}
                          className="object-cover w-12 h-12 rounded-full border border-yellow-400 p-0.5 "
                        />
                      </div>
                      <div className=" flex-1">
                        <h4 className="font-bold">{review?.user}</h4>
                        <span className="text-xs text-green-500 font-bold">
                          {moment(review?.date).format("lll")}
                        </span>
                      </div>
                      <div className=" flex gap-2 items-center">
                        <RiStarSmileFill className=" text-xl text-yellow-400"></RiStarSmileFill>
                        <h4 className=" font-semibold">{review?.rating}</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              count={count}
              dataPerPage={6}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Pagination>
          </>
        )}
      </section>
    </main>
  );
};

export default Reviews;
