import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const SmallNav = () => {
    return (
        <nav className="d-sm-none col-2 col-sm-1 text-center">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Dropdown /></li>
                </ul>
            </div>
        </nav>
    )
};

export default SmallNav;