import useBooks from "../../../Hooks/useBooks";
import Search from "../../Common/Search/Search";
import { useState, useEffect } from "react";
import './Home.css';
import Pagination from "../../Pagination/Pagination";
import BookList from "../../BookList/BookList";

export const Home = () => {
    const { loading, books } = useBooks();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 6;

    // Load search and genre from localStorage (if available)
    useEffect(() => {
        const savedSearchVal = localStorage.getItem('searchVal') || '';
        const savedGenre = localStorage.getItem('selectedGenre') || 'All';

        handleFilterAndSearch(savedSearchVal, savedGenre);
    }, [books]);

    const handleFilterAndSearch = (searchVal, selectedGenre) => {
        let filtered = books;

        // Filter by genre
        if (selectedGenre && selectedGenre !== "All") {
            filtered = filtered.filter(book =>
                book.subjects && book.subjects.includes(selectedGenre)
            );
        }

        // Filter by search term
        if (searchVal) {
            filtered = filtered.filter(book =>
                book.title && book.title.toLowerCase().includes(searchVal.toLowerCase())
            );
        }

        setFilteredBooks(filtered);
        setCurrentPage(1);
    };

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='home'>
            <Search
                books={books}
                onFilterAndSearch={handleFilterAndSearch}
            />

            <BookList
                books={currentBooks}
                loading={loading}
            />

            <Pagination
                booksPerPage={booksPerPage}
                totalBooks={filteredBooks.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};
