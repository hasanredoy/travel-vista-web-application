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
 <section className=" flex gap-20  w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
  {/* 1st discount  */}
    <div className=' relative flex-1 flex items-center justify-center flex-col h-[200px] bg-gradient-to-tr rounded-lg shadow-lg shadow-gray-400 from-[#c8fcf9] via-[#fdc1f3]  to-[#9bfdf8]'>
     {/* <div className=' absolute top-2 left-0 right-auto'>
      <Image src={discount40percent} alt='discount 40%' height={60} width={60}></Image>

     </div>
     <div className=' absolute top-2  right-0 rotate-90'>
      <Image src={line} alt='line' height={80} width={60}></Image>

     </div> */}
      <h1  className=' text-xl font-black   '>Get Upto 40% discount on your first tour</h1>
     <div className=' flex gap-6'>
      <Image src={discountImage4} alt='discount ' height={100} width={100}></Image>
      
     </div>
    </div>
  {/* 2nd discount  */}
  <div className=' flex-1 h-[400px] bg-gradient-to-r from-[#c8fcf9] via-[#e4b2f8]  to-[#09c4ba]'>
      <h1>Get Upto 40% Discount </h1>
      <Image src={discountImage1} alt='discount ' height={100} width={100}></Image>
      
    </div>
 </section>
  );
};

export default Discount;
