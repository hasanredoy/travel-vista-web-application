import axios from "axios"
import { FaAnglesRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbHeartStar } from "react-icons/tb";


 const loadData = async()=>{
  const res = await axios.get(`${process.env.NEXT_BASE_URL}/api/featured`)
  return res.data?.data
}
const Cards =async () => {
const tourData = await loadData()

  return (
    <div className="  grid grid-cols-3 gap-x-10 gap-y-14 mx-auto w-[95%] md:w-[90%] lg:w-[85%]">
      {tourData?.map((data,index)=><div key={index} className="card bg-base-100 border border-sky-200 shadow-xl relative pb-0">
  <figure>
    <img
      src={data?.image}
      className="max-h-40 w-full"
      alt={data?.title} />
  </figure>
  <div className=" p-5 ">
    <h2 className="card-title">{data?.title?.split(",")[0]}</h2>
   <div className=" flex justify-between">
   <h4 className=" flex gap-2 my-2 items-center"><IoLocationOutline></IoLocationOutline> <span>{data?.title?.split(",")[1]}</span></h4>
   <h4 className=" flex gap-2 my-2 items-center"><TbHeartStar className=" text-xl text-red-400"></TbHeartStar><span>{data?.rating}</span></h4>
   </div>
    <div className=" w-full border-t border-gray-400 my-2"></div>
    <p>{data.description}</p>

  </div>
  <div className=" flex justify-center mb-3">
  <button title="view details" className="  btn-primary w-10  h-8 text-center text-white"><FaAnglesRight className=""></FaAnglesRight></button>
  </div>

      </div>)}
    </div>
  );
};

export default Cards;