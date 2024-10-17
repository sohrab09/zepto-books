import { useContext } from "react";
import "./Wishlist.css";
import { WishlistContext } from "../../Context/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleMinus, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

export const Wishlist = () => {

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

    const formatKey = (key) => {
        switch (key) {
            case "text/html":
                return "HTML Version";
            case "application/epub+zip":
                return "EPUB Version";
            case "application/x-mobipocket-ebook":
                return "MOBI Version";
            case "application/rdf+xml":
                return "RDF Metadata";
            case "image/jpeg":
                return "Cover Image";
            case "text/plain; charset=us-ascii":
                return "Plain Text Version";
            case "application/octet-stream":
                return "Zip File";
            default:
                return key;
        }
    };

    return (
        <div>
            {
                wishlist.length > 0 ?
                    wishlist.map((book, index) => {
                        const inWishlist = isBookInWishlist(book.id);
                        return (
                            <div className="wishlist-container" key={index}>
                                <div className="image-section">
                                    <img
                                        src={book.formats["image/jpeg"]}
                                        alt={book.title}
                                        className="main-image"
                                    />
                                </div>

                                <div className="details-section">
                                    <h5>Book ID: {book.id}</h5>
                                    <div className="book-and-wishlist">
                                        <h1>{book.title}</h1>
                                        <div onClick={() => handleWishlistToggle(book)} className="wishlist-icon">
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
                                    <div className="author">
                                        <a href="#">{book.authors[0]?.name}</a>
                                    </div>
                                    <h3>About the book</h3>
                                    <p className="description">
                                        {book.subjects.map((subject, index) => (
                                            <li key={index}>{subject}</li>
                                        ))}
                                    </p>

                                    <h3 className="book-shelves">Book shelves</h3>
                                    <p className="description">
                                        {
                                            book.bookshelves.map((shelf, index) => (
                                                <li key={index}>{shelf}</li>
                                            ))
                                        }
                                    </p>

                                    <div className="language-section">
                                        <strong>Language: {book.languages[0]}</strong>
                                    </div>

                                    <h2>Available Formats</h2>
                                    <ul>
                                        {Object.entries(book.formats).map(([key, value]) => (
                                            <li key={key}>
                                                <strong>{formatKey(key)}: </strong>
                                                <a href={value} target="_blank" rel="noopener noreferrer">
                                                    {value}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    <br />
                                    <br />
                                </div>
                            </div>
                        )
                    })
                    : <h1 className="no-items">No items in Wishlist</h1>
            }
        </div>
    );
};
