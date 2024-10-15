import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <span>Zepto Books</span>
                        <span className="icon">
                            <CodeIcon />
                        </span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                <FontAwesomeIcon icon={faHouseChimney} />
                                {" "}
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/wishlist"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                                {" "}
                                Wishlist
                                {" "}
                                10
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>

                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />{" "}
                            </span>
                        ) : (
                            <span className="icon">

                                <HamburgetMenuOpen />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
