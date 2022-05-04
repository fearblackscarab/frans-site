import React from "react";
import Product from "./Product";

const ProductsDisplay = () => {
    return (
        <div className="product-group text-center">
            <h2 className="product-group-title">type of product</h2>
            <div className="card-deck">
                <div className="product col-sm-6 col-md-4">
                    <Product />
                </div>
                <div className="product col-sm-6 col-md-4">
                    <Product />
                </div>
                <div className="product col-sm-6 col-md-4">
                    <Product />
                </div>
                <div className="product col-sm-6 col-md-4">
                    <Product />
                </div>
                <div className="product col-sm-6 col-md-4">
                    <Product />
                </div>
                <div className="product col-sm-6 col-md-4">
                    <Product />
                </div>
            </div>
        </div>
    )
};

export default ProductsDisplay;