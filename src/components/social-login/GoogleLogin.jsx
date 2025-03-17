import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react'

const GoogleLogin = () => {
    // state to handle loading
    const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const handleGoogleLogin = async () => {
    
    try {
      setLoading(true)
      const response = await signIn("google", { redirect: false });


      swal("Logged in Successfully", "", "success");
      router.push(redirectPath?redirectPath:"/"); // Redirect to intended page
    } catch (error) {
      swal("Something went wrong", "Please try again later.", "error");
    }finally{
      setLoading(false)
    }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className=" p-2 px-4 rounded-md bg-neutral-900 text-white  flex justify-center items-center gap-2 hover:bg-white hover:text-neutral-900 border hover:border-neutral-900 "
    >
      Login with
      <FcGoogle></FcGoogle>
    </button>
  );
}

export default GoogleLogin