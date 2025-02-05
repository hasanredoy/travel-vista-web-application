"use client"

import Image from "next/image"
import errorImage from "../../public/error.png"
import Link from "next/link"

const Error = () => {
  return (
    <main className=" flex justify-center items-center flex-col gap-8 min-h-screen">
       {/* imag section  */}
       <section>
        <Image src={errorImage} alt="error image" width={300} height={200}></Image>
       </section>
        {/* tex and button sect  */}
        <section>
          <h1 className=" text-xl font-bold text-center">❌ Oops! Something went wrong. Please refresh the page.</h1>
          <Link href={'/'} className="flex justify-center">
          <button className=" rounded-lg px-3 py-1 border border-neutral-100 bg-red-500 text-neutral-100 font-semibold mt-3 hover:text-red-500 hover:bg-slate-50 hover:border-red-500">Return Home</button>
          </Link>
        </section>
    </main>
  )
}

export default Error ;
