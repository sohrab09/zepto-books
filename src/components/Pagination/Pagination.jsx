/* eslint-disable react/prop-types */

import './Pagination.css';

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            <nav className="pagination-nav">
                <ul className="pagination-list">
                    {pageNumbers.map(number => (
                        <li key={number} className={number === currentPage ? "active" : ""}>
                            <button onClick={() => paginate(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
