/* eslint-disable react/prop-types */
import './BookLists.css';
import { FidgetSpinner } from 'react-loader-spinner';
import { useContext } from 'react';
import { WishlistContext } from '../../Context/WishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons/faHeartCirclePlus';
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons/faHeartCircleMinus';


const BookLists = ({ loading, books }) => {
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

    const isBookInWishlist = (bookId) => {
        return wishlist.some(book => book.id === bookId);
    };

    const handleWishlistToggle = (book) => {
        if (isBookInWishlist(book.id)) {
            removeFromWishlist(book.id);
        } else {
            addToWishlist(book);
        }
    };

    return (
        <section className='book-container'>
            <div className="book-items my-6">
                {
                    loading ? (
                        <FidgetSpinner
                            visible={true}
                            height="350"
                            width="350"
                            ariaLabel="fidget-spinner-loading"
                            wrapperStyle={{}}
                            wrapperClass="fidget-spinner-wrapper"
                        />
                    ) : (
                        books.map((book, index) => {
                            const inWishlist = isBookInWishlist(book.id);
                            return (
                                <div className="book-item" key={index}>
                                    <div className='book-item-btn'>
                                        <div
                                            className="add-wishlist-btn"
                                            onClick={() => handleWishlistToggle(book)}
                                        >
                                            {
                                                inWishlist ? (
                                                    <FontAwesomeIcon
                                                        icon={faHeartCircleMinus}
                                                        size='2x'
                                                        color='red'
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faHeartCirclePlus}
                                                        size='2x'
                                                        color='green'
                                                    />
                                                )
                                            }

                                        </div>
                                    </div>
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
                                </div>
                            )
                        })
                    )
                }
            </div>
        </section>
    );
};

export default BookLists;
