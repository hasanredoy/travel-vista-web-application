
const Pagination = ({count,dataPerPage,currentPage,setCurrentPage}) => {
  const pages = Math.ceil(count/dataPerPage)
  let totalPage = []
  for(let i = 0; i<pages;i++){
    totalPage.push(i)
  } 
  console.log(totalPage);

  return (
    <div>
      {/* btns section  */}
      <div className=" flex justify-center gap-5">
        {totalPage.map((page,index)=><button onClick={()=>setCurrentPage(page)} className={` ${page==currentPage&&'bg-sky-300'} p-1 px-2 border border-gray-200 rounded`} key={index}>{index+1}</button>)}
      </div>
    </div>
  );
};

export default Pagination;