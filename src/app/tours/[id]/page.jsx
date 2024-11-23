import { useParams } from "next/navigation";

const ToursDetails = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div>
      
    </div>
  );
};

export default ToursDetails;