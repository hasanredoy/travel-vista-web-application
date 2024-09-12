import axios from "axios"

 const loadData = async()=>{
  const res = await axios.get(`${process.env.NEXT_BASE_URL}/api/featured`)
  return res.data?.data
}
const Cards =async () => {
const tourData = await loadData()

  return (
    <div className=" grid grid-cols-3 gap-x-10 gap-y-10 mx-auto w-[95%] md:w-[90%] lg:w-[85%]">
      {tourData?.map((data,index)=><div key={index}className="card bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>

      </div>)}
    </div>
  );
};

export default Cards;