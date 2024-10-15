import useBooks from "../../../Hooks/useBooks";
import BookLists from "../../Common/BookLists/BookLists";
import Search from "../../Common/Search/Search";
import { useState, useEffect } from "react";
import './Home.css';

export const Home = () => {
    const { loading, books } = useBooks();
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        setFilteredBooks(books);
    }, [books]);

    const handleFilterAndSearch = (searchVal, selectedGenre) => {
        let filtered = books;

        if (selectedGenre && selectedGenre !== "All") {
            filtered = filtered.filter(book => book.subjects.includes(selectedGenre));
        }

        if (searchVal) {
            filtered = filtered.filter(book =>
                book.title.toLowerCase().includes(searchVal.toLowerCase())
            );
        }

        setFilteredBooks(filtered);
    };

    return (
        <div className='home'>
            <Search
                books={books}
                onFilterAndSearch={handleFilterAndSearch}
            />
            <BookLists
                loading={loading}
                books={filteredBooks}
            />
        </div>
    );
};
