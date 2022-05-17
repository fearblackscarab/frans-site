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
                <div className="single-product col-12 col-sm-6">
                <div className="card">
                <img className="card-img-top" src={`/media/${data.jewelry_img}`} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{data.jewelry_name}</h5>
                </div>
            </div>
                </div>
                <div className="single-info col-12 col-sm-6">
                    <Product key={data.jewelry_id} id={data.jewelry_id} img={data.jewelry_img} name={data.jewelry_name} desc={data.jewelry_desc} />
                </div>
            </div>
        </main>
    )
};

export default SingleJewelry;