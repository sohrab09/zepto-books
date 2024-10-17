import { useContext } from 'react'
import './Wishlist.css';
import { WishlistContext } from '../../Context/WishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleMinus } from '@fortawesome/free-solid-svg-icons';

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


    return (
        <div>

            {
                wishlist.length > 0 ? (
                    <div className="favorite-items">
                        <h2>Your Favorite Books</h2>
                        <p>There are {wishlist.length} Books in this list</p>

                        <table className="favorite-table">
                            <thead>
                                <tr>
                                    <th>Books Name</th>
                                    <th>Author</th>
                                    <th>Download Count</th>
                                    <th>Copyright</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist.map(book => (
                                    <tr key={book.id}>
                                        <td>
                                            <div className="product-info">
                                                <img src={book.formats["image/jpeg"]} alt={book.title} />
                                                <span>{book.title}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="author-name">{book.authors[0]?.name}</span>
                                        </td>
                                        <td>{book.download_count}</td>
                                        <td>{book.copyright ? "Yes" : "No"}</td>
                                        <td>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faHeartCircleMinus}
                                                    onClick={() => handleWishlistToggle(book)}
                                                    style={{ cursor: "pointer" }}
                                                    title={isBookInWishlist(book.id) ? "Remove from wishlist" : "Add to wishlist"}
                                                    size="2x"
                                                    color={isBookInWishlist(book.id) ? "red" : "green"}
                                                />
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="empty-wishlist">
                        <h3>Wishlist is empty!</h3>
                    </div>
                )
            }

        </div>
    )
}

