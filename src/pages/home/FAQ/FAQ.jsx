import Heading from "@/components/reuseble/Heading";

const FAQ = () => {
  return (
    <section className="  w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Frequently Ask '} imp={' Questions'}></Heading>
      {/* image div  */}
      <div>
        
      </div>
      {/* accordion div  */}
      <div>
      <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
				<div className="px-4 pb-4">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
					<p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
				</div>
			</details>
		</div>
      </div>
    </section>
  );
};

export default FAQ;