import useBooks from "../../../Hooks/useBooks";
import BookLists from "../../Common/BookLists/BookLists";
import Search from "../../Common/Search/Search";
import './Home.css';


export const Home = () => {

    const { loading, books } = useBooks();

    return (
        <div className='home'>
            <Search
                loading={loading}
                books={books}
            />
            <BookLists
                loading={loading}
                books={books}
            />
        </div>
    );
};
