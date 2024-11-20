/* eslint-disable @next/next/no-img-element */

const ToursCard = ({tours}) => {
  return (
    <main className=" grid grid-cols-2 gap-20">
      {tours.map((tour,index)=><div className=" rounded-e-md relative flex gap-10 w-full border shadow-lg bg-sky-800 bg-opacity-25 p-5 min-h-[300px] h-full" key={index}>
        {/* image section  */}
        <section className=" flex-1  ">
          <img src={tour?.image} alt={tour?.title} className="absolute -left-5 w-[250px] h-[250px]" />
        </section>
        {/* texts and others section  */}
        <section className=" flex-1">

        <h1>{tour?.title}</h1>
        </section>
      </div>)}
    </main>
  );
};

export default ToursCard;