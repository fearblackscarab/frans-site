import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className="card h-100 product-card">
            <Link to={`/${props.id}`} className='product-link'>
                <img className="card-img-top img-fluid card-img" src={`/media/${props.img}`} alt="product" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </Link>
        </div>
    )
};

export default Product;