
const ToursCard = ({tours}) => {
  return (
    <main className=" grid grid-cols-2">
      {tours.map((tour,index)=><div className="flex gap-10 w-full" key={index}>
        {/* image section  */}
        <section>
          <img src={tour?.image} alt={tour?.title} />
        </section>
        {/* texts and others section  */}
        <section>

        <h1>{tour?.title}</h1>
        </section>
      </div>)}
    </main>
  );
};

export default ToursCard;