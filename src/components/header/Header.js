import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";

const Header =()=>{
    return(
        <header className="header container text-center">
            <div className="row justify-content-center">
                <div className="logo-div col-12 d-md-none">
                    <Link to='/'><img src="/media/logo.jpg" className="img-fluid"/></Link>
                </div>
                <div className="logo-div col-4 d-none d-md-block">
                    <Link to='/'><img src="/media/small-logo.jpg" className="img-fluid"/></Link>
                </div>
                <SmallNav/>
                <LargeNav/>
            </div>
        </header>
    )
};

export default Header;