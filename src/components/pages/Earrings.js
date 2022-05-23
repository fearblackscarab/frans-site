import React, { useState,useEffect } from "react";
import Product from "../parts/Product";

const Earrings =(props)=>{
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/jewelry/group/3';
        fetch(url).then(res => res.json()).then(item => setData(item));
    }, []);
    return(
        <main className="main container">
            <div className="product-group text-center">
                <h2 className="product-group-title">Earrings</h2>
                <div className="card-deck">
                    {data.map(item => {
                        return (
                            <div className="product col-sm-6 col-md-4">
                                <Product key={item.jewelry_id} id={item.jewelry_id} img={item.jewelry_img} name={item.jewelry_name} desc={item.jewelry_desc} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
};

export default Earrings;