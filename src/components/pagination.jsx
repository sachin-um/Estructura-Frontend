import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
      {pageNumbers.map((number) => (
        <li key={number} style={{ margin: '0 5px' }}>
          <button
            onClick={() => setCurrentPage(number)}
            style={{
              backgroundColor: currentPage === number ? '#804000' : 'transparent',
              color: currentPage === number ? '#fff' : '#804000',
              border: '1px solid #804000',
              borderRadius: '4px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
