import React from "react";
import { Link } from "react-router-dom";
import {ImCart} from 'react-icons/im'
import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";



const Header = () => {
    return (
        <header className="header container-fluid text-center">
            <div className="row justify-content-center">
                <LargeNav />
                <div className="logo-div col-12 d-md-none">
                    <Link to='/'><img src="/media/logo.jpg" className="img-fluid logo" /></Link>
                </div>
                <div className="logo-div col-4 d-none d-md-block">
                    <Link to='/'><img src="/media/small-logo.jpg" className="img-fluid small-logo" /></Link>
                </div>
                <SmallNav />
                <div className="cart-div col-4">
                    <div className="cart-icon-div">
                    <ImCart className='cart-icon'/>
                    <p className="shop-amount">0</p>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;