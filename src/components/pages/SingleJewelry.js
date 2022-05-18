import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const SingleJewelry = (props) => {
    const [data, setData] = useState([]);
    const { jewelryid } = useParams();

    useEffect(() => {
        const url = `http://localhost:3001/api/jewelry/${jewelryid}`;
        fetch(url).then(res => res.json()).then(item => setData(item));
    }, []);
    return (
        <main className="main container">
            <div className="row">

                <div className="single-card col-12 col-sm-6">
                    <Product key={data.jewelry_id} id={data.jewelry_id} img={data.jewelry_img} name={data.jewelry_name} desc={data.jewelry_desc} />
                </div>
                <div className="single-info col-12 col-sm-6">
                    <h2 className="single-info-title">{data.jewelry_name}</h2>
                    <p className="single-info-price">${data.jewelry_price}</p>
                    <p className="single-info-desc">{data.jewelry_desc}</p>
                </div>
            </div>
        </main >
    )
};

export default SingleJewelry;