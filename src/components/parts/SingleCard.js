import React from "react";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
    return (
        <div className="card h-100 product-card">
                <img className="card-img-top img-fluid single-card-img" src={`/media/${props.img}`} alt="product" />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.name}</h5>
                </div>
        </div>
    )
};

export default SingleCard;