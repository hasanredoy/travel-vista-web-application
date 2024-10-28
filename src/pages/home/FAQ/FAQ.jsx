/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/reuseble/Heading";
import faqImage from '../../../../public/assets/faq.jpg'
import Image from "next/image";
const FAQ = () => {
  return (
    <section className="  w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Frequently Asked '} imp={' Questions'}></Heading>
     <section className="flex "> 
      {/* image div  */}
      <div>
        <Image src={faqImage} className=" " width={600} height={500} alt="faq banner image" />
      </div>
      {/* accordion div  */}
      <div className=" max-w-[500px] bg-[#ebeefc]">
      <div className="flex flex-col divide-y sm:px-8 lg:px-12 ">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How do I book a trip on Travel Vista?</summary>
				<div className="px-4 pb-4">
					<p>Booking a trip on Travel Vista is simple! Just browse our destinations, select your preferred package, and follow the prompts to complete your booking.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Can I customize my travel itinerary?</summary>
				<div className="px-4 pb-4">
					<p>Absolutely! We offer customizable travel itineraries for many packages. Look for the &quot;customizable&quot; tag or speak to our travel agents for tailored experiences.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is included in a travel package?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Our packages typically include accommodation, select meals, guided tours, and transportation within the destination. However, each package is unique, so refer to the specific package details for more information.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How do I know if a tour is suitable for families?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p> We label each tour with specific categories, like &quot;Family-Friendly&quot; or &quot;Adventure.&quot; You can also filter options to find tours that best suit your group’s needs.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Can I get a refund if I cancel my booking?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p> Yes, but it depends on when you cancel. Our cancellation policy allows for partial or full refunds based on the timing of your cancellation. Be sure to check the specific policy details at checkout.</p>
				</div>
			</details>
		</div>
      </div></section>
    </section>
  );
};

export default FAQ;