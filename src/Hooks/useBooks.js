import axios from 'axios';
import { useState, useEffect } from 'react';

const useBooks = () => {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setLoading(true);
        const getBooks = async () => {
            try {
                axios.get("https://gutendex.com/books")
                    .then((res) => {
                        // console.log("res", res.data.results);
                        setBooks(res.data.results);
                        setLoading(false);
                    })
            } catch (error) {
                console.error("Fetch books error -------->>>>> ", error);
            } finally {
                setLoading(false);
            }
        };
        getBooks();
    }, []);

    return { loading, books };
};

export default useBooks;
