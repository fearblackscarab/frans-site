import React, { useState } from "react";
import Product from "./Product";

const ProductsDisplay = (props) => {
    // const [data,setData]=useState({})
    // setData(props.type)
    return (
        <div className="product-group text-center">
            <h2 className="product-group-title">type of product</h2>
            <div className="card-deck">
                <Product img='testbracelet.jpg' />
            </div>
        </div>
    )
};

export default ProductsDisplay;