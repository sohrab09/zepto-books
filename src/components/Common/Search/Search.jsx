import { useState } from 'react'
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';


const Search = () => {

    const [searchVal, setSearchVal] = useState('');

    const handleInput = (e) => {
        setSearchVal(e.target.value);
    };

    const handleClearBtn = () => {
        setSearchVal('');
    };


    return (
        <div className='container'>
            <div className='input-wrap'>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="fas fa-search"
                    color='white'
                    style={{ fontSize: '2rem' }}
                />
                <label
                    htmlFor="book-search"
                    id="input-label"
                >
                    Book Search
                </label>
                <input
                    onChange={handleInput}
                    value={searchVal}
                    type="text"
                    name="book-search"
                    id="book-search"
                    placeholder="Search Book"
                />
                <FontAwesomeIcon
                    className="fas fa-times"
                    icon={faXmark}
                    onClick={handleClearBtn}
                    style={{ fontSize: '2rem' }}
                    color='white'
                />
            </div>
        </div>
    )
}

export default Search;