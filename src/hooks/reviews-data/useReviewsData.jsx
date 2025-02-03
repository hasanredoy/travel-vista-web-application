"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useReviewsData = (refetch, userReview,currentPage) => {
  //  get user from session
  const { user } = useSession()?.data || {};

  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews?userEmail=${
    userReview ? user.email : ""
  }&page=${currentPage}&size=${6}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        setLoading(false);
      });
  }, [apiUrl, refetch, userReview,currentPage]);

  return [reviews, loading] || [];
};

export default useReviewsData;
