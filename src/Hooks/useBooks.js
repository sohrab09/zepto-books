import axios from 'axios';
import { useState, useEffect } from 'react';

const useBooks = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const cachedBooks = localStorage.getItem('booksCache');
        const cacheTimestamp = localStorage.getItem('booksCacheTimestamp');
        const cacheExpiry = 24 * 60 * 60 * 1000;

        if (cachedBooks && cacheTimestamp && (Date.now() - cacheTimestamp < cacheExpiry)) {
            setBooks(JSON.parse(cachedBooks));
            setLoading(false);
        } else {
            const getBooks = async () => {
                setLoading(true);
                try {
                    const response = await axios.get("https://gutendex.com/books");
                    const fetchedBooks = response.data.results;

                    setBooks(fetchedBooks);
                    localStorage.setItem('booksCache', JSON.stringify(fetchedBooks));
                    localStorage.setItem('booksCacheTimestamp', Date.now());
                } catch (error) {
                    console.error("Fetch books error -------->>>>> ", error);
                } finally {
                    setLoading(false);
                }
            };
            getBooks();
        }
    }, []);

    return { loading, books };
};

export default useBooks;
