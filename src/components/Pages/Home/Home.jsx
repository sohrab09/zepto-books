import BookLists from "../../Common/BookLists/BookLists";
import Search from "../../Common/Search/Search";
import './Home.css';


export const Home = () => {
    return (
        <div className='home'>
            <Search />
            <BookLists />
        </div>
    );
};
