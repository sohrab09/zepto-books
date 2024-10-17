import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Wishlist } from "./components/Pages/Wishlist/Wishlist";
import NavBar from "./components/Navbar";
import { WishlistProvider } from "./components/Context/WishlistContext";
import { BookInfo } from "./components/Pages/BookInfo/BookInfo";

function App() {
  return (
    <WishlistProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookInfo />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
}

export default App;
