import "./style.scss";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {

  const pageNumbers = [];
 
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
    
  }


  return (
    <div className="controls">
      <div className="numbers">
        {pageNumbers.map((page) => (
          <div
            key={page}
            className={`width-and-height ${page === currentPage && "active"}`}
            onClick={() => paginate(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
