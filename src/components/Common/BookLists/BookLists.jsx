import './BookLists.css';
import image from '../../../assets/dummyBook.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";


const BookLists = () => {
    return (
        <section className='book-container'>

            <div className="book-items my-6">

                <div className="book-item">
                    <img src={image} alt="bookImage" className='book-image' />
                    <div className='book-item-content'>
                        Book Id:
                    </div>
                    <div className='book-item-content'>
                        Book Title:
                    </div>
                    <div className='book-item-content'>
                        Book Author:
                    </div>
                    <div className='book-item-content'>
                        Author Name:
                    </div>
                    <div className='book-item-content'>
                        Genres:
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

            </div>
        </section>
    )
}

export default BookLists