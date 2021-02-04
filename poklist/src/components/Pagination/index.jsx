import { NavContainer } from "./style";

const Pagination = ({ pokesPerPage, totalPokes, paginate, currentPage }) => {
  const numberOfPages = Math.ceil(totalPokes / pokesPerPage);

  // for (let i = 1; i <= Math.ceil(totalPokes / pokesPerPage); i++) {
  //   numberOfPages.push(i);
  // }

  const pastPages = []
  const nextPages = []

  const displayPages = (numberOfPAges, currentPage) => {
    switch (currentPage) {
      case 1:
        for(let i = 2; i <= 7; i++){
          nextPages.push(i)
        }
        break;

      case 2:
        pastPages.push(1)
        for(let i = 3; i <= 7; i++){
          nextPages.push(i)
        }
        break;

      case 3:
        pastPages.push(1, 2)
        for(let i = 4; i <= 7; i++){
          nextPages.push(i)
        }
        break;

      case numberOfPAges - 2:
        
        for(let i = numberOfPAges - 6; i < currentPage ; i++){
          pastPages.push(i)
        }
        nextPages.push(numberOfPAges - 1, numberOfPAges)
        break;

      case numberOfPAges - 1:
        for(let i = numberOfPAges - 6; i < currentPage; i++){
          pastPages.push(i)
        }
        nextPages.push( numberOfPAges)
        break;

      case numberOfPAges:
        for(let i = numberOfPAges - 6; i < currentPage; i++){
          pastPages.push(i)
        }
        break;
    
      default:
        pastPages.push(currentPage-3, currentPage - 2, currentPage -1)
        nextPages.push(currentPage +1, currentPage + 2, currentPage + 3)
        break;
    }
  }

  displayPages(numberOfPages, currentPage)

  return (
    <NavContainer>
      <ul>
        <li>Primeiro</li>
        <li>Anterior</li>
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
        <li>Proximo</li>
        <li>Último</li>
      </ul>
    </NavContainer>
  );
};

export default Pagination;
