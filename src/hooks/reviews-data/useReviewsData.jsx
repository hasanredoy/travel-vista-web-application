
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
    if(!apiUrl){
      return console.log("Enter a API url.")
    }
   const LoadReviews=async()=>{
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
       setReviews(data?.data);
    } catch (error) {
      console.log("Failed to load reviews.",error)
    }finally{
              setLoading(false);

    }
   }
LoadReviews()
  }, [apiUrl, refetch, userReview,currentPage]);

  return [reviews, loading] || [];
};

export default useReviewsData;
