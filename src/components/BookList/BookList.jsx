/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./BookList.css";
import { WishlistContext } from "../Context/WishlistContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleMinus, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FidgetSpinner } from 'react-loader-spinner';


const BookList = ({ loading, books }) => {

    const navigate = useNavigate();

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

    const handleBookDetails = (book) => {
        navigate(`/book/${book.id}`, { state: { book } });
    };

    return (
        <div className="card-grid">
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
                            <div className="card" key={index} data-aos="zoom-in-up">
                                <div className="image-container">
                                    <img src={book.formats["image/jpeg"]} alt={book.title} className="book-image" />
                                    <button className="wishlist-btn" onClick={() => handleWishlistToggle(book)}>
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
                                    </button>
                                </div>
                                <div className="card-content">
                                    <p><strong>Book ID:</strong> {book.id}</p>
                                    <p><strong>Book Title:</strong> {book.title}</p>
                                    <p><strong>Book Author:</strong> {book.authors[0]?.name}</p>
                                    <ul className="genres">
                                        <strong>Genres:</strong>
                                        <ul className="genre-list">
                                            {book.subjects.map((subject, index) => (
                                                <li key={index}>{subject}</li>
                                            ))}
                                        </ul>
                                    </ul>
                                    <button className="details-btn" onClick={() => handleBookDetails(book)}>View Details</button>
                                </div>
                            </div>
                        )
                    }
                    ))}
        </div>
    );
};

export default BookList;
