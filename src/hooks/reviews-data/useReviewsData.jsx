"use client";

import { useEffect, useState } from "react";

const useReviewsData = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/reviews`;
  useEffect(()=> {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setReviews(data.data);
        setLoading(false);
      });
  }, [apiUrl]);

  return [reviews, loading] || [];
};

export default useReviewsData;
