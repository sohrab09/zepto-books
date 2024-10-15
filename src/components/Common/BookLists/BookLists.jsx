/* eslint-disable react/prop-types */
import { useState } from 'react';
import './BookLists.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FidgetSpinner } from 'react-loader-spinner';
import Pagination from '../../Pagination/Pagination';

const BookLists = ({ loading, books }) => {

    const dataPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastBook = currentPage * dataPerPage;
    const indexOfFirstBook = indexOfLastBook - dataPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const totalPages = Math.ceil(books.length / dataPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className='book-container'>
            <div className="book-items my-6">
                {
                    loading ?
                        <FidgetSpinner
                            visible={true}
                            height="350"
                            width="350"
                            ariaLabel="fidget-spinner-loading"
                            wrapperStyle={{}}
                            wrapperClass="fidget-spinner-wrapper"
                        />
                        :
                        currentBooks.map((book, index) => {
                            return (
                                <div className="book-item" key={index}>
                                    <img src={book.formats["image/jpeg"]} alt="bookImage" className='book-image' />
                                    <div className='book-item-content'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ width: '40%' }}>Book ID:</span>
                                            <span style={{ width: '60%' }}>{book.id}</span>
                                        </div>
                                    </div>
                                    <div className='book-item-content'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ width: '40%' }}>Book Title:</span>
                                            <span style={{ width: '60%' }}>{book.title}</span>
                                        </div>
                                    </div>
                                    <div className='book-item-content'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ width: '40%' }}>Book Author:</span>
                                            <span style={{ width: '60%' }}>{book.authors[0]?.name}</span>
                                        </div>
                                    </div>
                                    <div className='book-item-content'>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ width: '40%' }}>Genres:</span>
                                            <span style={{ width: '60%' }}>
                                                <ul>
                                                    {book.subjects.map((subject, index) => (
                                                        <li key={index}>{subject}</li>
                                                    ))}
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='book-item-btn'>
                                        <div className="add-wishlist-btn">
                                            Add wishlist
                                            {" "}
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                size='lg'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>

            <Pagination
                loading={loading}
                totalPages={totalPages}
                currentPage={currentPage}
                paginate={paginate}
            />

        </section>
    );
};

export default BookLists;
