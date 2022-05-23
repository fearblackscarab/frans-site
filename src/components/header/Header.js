import React from "react";
import { Link } from "react-router-dom";
// import { ImCart } from 'react-icons/im'
import LargeNav from "./LargeNav";


const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid text-center">
                <div className="row justify-content-center">
                    <div className="logo-div col-12">
                        <Link to='/'><img src="/media/logo.jpg" className="img-fluid logo" alt='logo' /></Link>
                    </div>
                    <LargeNav />
                </div>
            </div>
        </header>
    )
};

export default Header;