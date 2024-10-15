/* eslint-disable react/prop-types */
import './Pagination.css';


const Pagination = ({ loading, currentPage, totalPages, paginate }) => {
    return (
        <div>
            {!loading && (
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Pagination;