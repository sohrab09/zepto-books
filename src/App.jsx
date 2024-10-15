import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { Wishlist } from "./components/Pages/Wishlist/Wishlist";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
