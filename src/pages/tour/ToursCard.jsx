
const ToursCard = ({tours}) => {
  return (
    <main>
      {tours.map((tour,index)=><div key={index}>
        <h1>{tour?.title}</h1>
      </div>)}
    </main>
  );
};

export default ToursCard;