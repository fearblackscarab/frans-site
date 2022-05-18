import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className="card product-card">
            <Link to={`/${props.id}`}>
                <img className="card-img-top" src={`/media/${props.img}`} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
            </Link>
        </div>
    )
};

export default Product;