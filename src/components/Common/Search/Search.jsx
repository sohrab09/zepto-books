/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const Search = ({ books = [], onFilterAndSearch }) => {
    const [searchVal, setSearchVal] = useState('');
    const [selectedGenre, setSelectedGenre] = useState("All");

    const handleInput = (e) => {
        const value = e.target.value;
        setSearchVal(value);
        onFilterAndSearch(value, selectedGenre);
    };

    const handleClearBtn = () => {
        setSearchVal('');
        onFilterAndSearch('', selectedGenre);
    };

    const handleDropdownChange = (e) => {
        const genre = e.target.value;
        setSelectedGenre(genre);
        onFilterAndSearch(searchVal, genre);
    };

    const genres = Array.isArray(books) ? [...new Set(books.flatMap(book => book.subjects))] : [];

    return (
        <div className='container'>
            <div className='input-wrap'>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="fas fa-search"
                    color='white'
                    style={{ fontSize: '2rem' }}
                />
                <label htmlFor="book-search" id="input-label">Book Search</label>
                <input
                    onChange={handleInput}
                    value={searchVal}
                    type="text"
                    name="book-search"
                    id="book-search"
                    placeholder="Search Book"
                />
                {
                    searchVal && <FontAwesomeIcon
                        className="fas fa-times"
                        icon={faXmark}
                        onClick={handleClearBtn}
                        style={{ fontSize: '2rem' }}
                        color='white'
                    />
                }
            </div>

            <div className="filter-wrap">
                <label htmlFor="genre-filter">Filter by Genre/Topic:</label>
                <select
                    name="genre-filter"
                    id="genre-filter"
                    value={selectedGenre}
                    onChange={handleDropdownChange}
                >
                    <option value="All">All</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Search;
