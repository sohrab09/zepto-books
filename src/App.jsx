import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Wishlist } from "./components/Pages/Wishlist";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
