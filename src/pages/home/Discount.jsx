import Image from 'next/image'
import discountImage1 from '../../../public/assets/discount_image/airfare_12516494.png'
import discountImage2 from '../../../public/assets/discount_image/plane-ticket (1).png'
import discountImage3 from '../../../public/assets/discount_image/plane-ticket.png'
import discountImage4 from '../../../public/assets/discount_image/output-onlinegiftools (3).gif'
import discountImage5 from '../../../public/assets/discount_image/travel.png'
import discountImage6 from '../../../public/assets/discount_image/travel_8205436.png'
import discount40percent from '../../../public/assets/discount_image/discount (1).png'
import line from '../../../public/assets/discount_image/line.png'

const Discount = () => {
  return (
 <section className=" flex flex-col md:flex-row gap-y-10 md:gap-20   w-[94%] overflow-hidden md:w-[90%] lg:w-[85%] px-5 md:px-0 mx-auto">
  {/* 1st discount  */}
    <div className=' px-3 py-5 md:p-5 relative w-full flex-1 flex items-center justify-center flex-col  h-[200px] bg-gradient-to-r rounded-lg shadow-lg shadow-gray-400 from-[#f8fafa] via-[#68e3e7]  to-[#f9fcfc]'>

      <h1  className=' text-base lg:text-xl font-black   '>Get Upto 40% discount on first tour!</h1>
     <div className=' flex gap-6'>
      <Image src={discountImage4} alt='discount ' height={100} width={100}></Image>
      
     </div>
    </div>
  {/* 2nd discount  */}
  <div className=' px-3 py-5 md:p-5 relative flex-1 flex items-center justify-center flex-col gap-5 h-[200px] bg-gradient-to-l rounded-lg shadow-lg shadow-gray-400 from-[#7ff8f2] via-[#f3f5f5]  to-[#60f0e9]'>

<h1  className=' text-base lg:text-xl font-black text-center'><a href="#">Follow</a> us on Twitter and get 80% discount!</h1>
<div className=' flex gap-6'>
<Image src={discountImage6} alt='discount ' height={100} width={100}></Image>

</div>
</div>
 </section>
  );
};

export default Discount;
