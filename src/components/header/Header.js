import React from "react";
import { Link } from "react-router-dom";
import {ImCart} from 'react-icons/im'
import LargeNav from "./LargeNav";
import SmallNav from "./SmallNav";



const Header = () => {
    return (
        <header className="header container-fluid text-center">
            <div className="row justify-content-center">
                <div className="logo-div col-12">
                    <Link to='/'><img src="/media/logo.jpg" className="img-fluid logo" /></Link>
                </div>
                <LargeNav />
                <SmallNav />
                <div className="cart-div">
                    {/* <div className="cart-icon-div">
                    <ImCart className='cart-icon'/>
                    <p className="shop-amount">0</p>
                    </div> */}
                </div>
            </div>
        </header>
    )
};

export default Header;