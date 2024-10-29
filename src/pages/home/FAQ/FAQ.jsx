/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/reuseble/Heading";
import faqImage from "../../../../public/assets/faq.jpg";
import Image from "next/image";
const FAQ = () => {
  return (
    <section className="  my-10">
      <Heading t1={"Frequently Asked "} imp={" Questions"}></Heading>
      <section className="bg-[#ebeefc] w-full">
        <section className="flex justify-center w-[94%]  md:w-[90%] lg:w-[85%] mx-auto">
          {/* image div  */}
          <div className="">
            <Image
              src={faqImage}
              className="  min-w-[570px] "
              width={600}
              height={500}
              alt="faq banner image"
            />
          </div>

          {/* accordion div  */}
          <div className="join join-vertical w-full border-0">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-lg font-medium">
              How do I book a trip on Travel Vista?
              </div>
              <div className="collapse-content">
              <p>Booking a trip on Travel Vista is simple! Just browse our destinations, select your preferred package, and follow the prompts to complete your booking.</p>
                
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-medium">
              Can I customize my travel itinerary?
              </div>
              <div className="collapse-content">
					<p>Absolutely! We offer customizable travel itineraries for many packages. Look for the &quot;customizable&quot; tag or speak to our travel agents for tailored experiences.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-medium">
              What is included in a travel package?
              </div>
              <div className="collapse-content">
                <p>Our packages typically include accommodation, select meals, guided tours, and transportation within the destination. However, each package is unique, so refer to the specific package details for more information.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-medium">
              How do I know if a tour is suitable for families?
              </div>
              <div className="collapse-content">
					<p> We label each tour with specific categories, like &quot;Family-Friendly&quot; or &quot;Adventure.&quot; You can also filter options to find tours that best suit your group’s needs.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-medium">
              Can I get a refund if I cancel my booking?
              </div>
              <div className="collapse-content">
					<p> Yes, but it depends on when you cancel. Our cancellation policy allows for partial or full refunds based on the timing of your cancellation. Be sure to check the specific policy details at checkout.</p>
              </div>
            </div>
          </div>
    
        </section>
      </section>
    </section>
  );
};

export default FAQ;
