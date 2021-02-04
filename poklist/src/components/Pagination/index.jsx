import { NavContainer } from "./style";

const Pagination = ({ pokesPerPage, totalPokes, paginate, currentPage }) => {
  const numberOfPages = Math.ceil(totalPokes / pokesPerPage);

  const pastPages = []
  const nextPages = []

  const paginationRange = numberOfPages < 7 ? numberOfPages : 7
 
  const displayPages = (numberOfPAges, currentPage) => {
    switch (currentPage) {
      case 1:
        for(let i = 2; i <= paginationRange; i++){
          nextPages.push(i)
        }
        break;

      case 2:
        pastPages.push(1)
        for(let i = 3; i <= paginationRange; i++){
          nextPages.push(i)
        }
        break;

      case 3:
        pastPages.push(1, 2)
        for(let i = 4; i <= paginationRange; i++){
          nextPages.push(i)
        }
        break;

      case numberOfPAges - 2:
        
        for(let i = numberOfPAges - 6; i < currentPage ; i++){
          i > 0 && pastPages.push(i)
        }
        nextPages.push(numberOfPAges - 1, numberOfPAges)
        break;

      case numberOfPAges - 1:
        for(let i = numberOfPAges - 6; i < currentPage; i++){
          i > 0 && pastPages.push(i)
        }
        nextPages.push( numberOfPAges)
        break;

      case numberOfPAges:
        for(let i = numberOfPAges - 6; i < currentPage; i++){
          i > 0 && pastPages.push(i)

        }
        break;
    
      default:
        pastPages.push(currentPage-3, currentPage - 2, currentPage -1)
        nextPages.push(currentPage +1, currentPage + 2, currentPage + 3)
        break;
    }
  }
  
  let pastPageButtom = currentPage > 1 ? currentPage - 1 : currentPage
  let nextPageButtom = currentPage < numberOfPages ? currentPage + 1 : currentPage



  displayPages(numberOfPages, currentPage)

  return (
    <NavContainer>
      <ul>

        <li onClick={() => paginate(1)}>
          Primeiro
        </li>

        <li onClick={() => paginate(pastPageButtom)} >
          Anterior
        </li>

        {pastPages.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}

        <li className='currentPage'>
            {currentPage}
          </li>

        {nextPages.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}

        <li onClick={() => paginate(nextPageButtom)}>
          Proximo
        </li>

        <li onClick={() => paginate(numberOfPages)}>
          Último
        </li>
      </ul>
    </NavContainer>
  );
};

export default Pagination;
