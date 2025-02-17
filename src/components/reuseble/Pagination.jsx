import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Pagination = ({ count, dataPerPage, currentPage, setCurrentPage }) => {
  const pages = Math.ceil(count / dataPerPage);
  let totalPage = [];
  for (let i = 0; i < pages; i++) {
    totalPage.push(i);
  }
  // handler to handle previous btn
  const handlePrev = () => {
    if (currentPage > 0 && currentPage < pages) {
      setCurrentPage(currentPage - 1);
    }
  };
  // handler to handle next btn
  const handleNext = () => {
    if (currentPage < pages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      {count ? (
        <div className=" flex justify-center gap-5">
          {/* prev btn  */}
          <div>
            <button
              onClick={handlePrev}
              className=" p-2 hover:bg-gray-200 border border-gray-200 rounded"
            >
              <FaLessThan></FaLessThan>
            </button>
          </div>
          {totalPage.map((page, index) => (
            <button
              onClick={() => setCurrentPage(page)}
              className={` ${
                page == currentPage && "bg-sky-300"
              } p-1 px-2 border border-gray-200 rounded`}
              key={index}
            >
              {index + 1}
            </button>
          ))}
          {/* next btn  */}
          <div>
            <button
              onClick={handleNext}
              className=" p-2 hover:bg-gray-200 border border-gray-200 rounded"
            >
              <FaGreaterThan></FaGreaterThan>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Pagination;
