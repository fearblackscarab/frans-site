import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../parts/SingleCard";

const SingleJewelry = (props) => {
    const [data, setData] = useState([]);
    const { jewelryid } = useParams();

    useEffect(() => {
        const url = `http://localhost:3001/api/jewelry/${jewelryid}`;
        fetch(url).then(res => res.json()).then(item => setData(item));
    });
    return (
        <main className="main container">
            <div className="single-div row">
                <div className="single-card col-12 col-sm-6">
                    <SingleCard key={data.jewelry_id} id={data.jewelry_id} img={data.jewelry_img} name={data.jewelry_name} desc={data.jewelry_desc} />
                </div>
                <div className="single-info col-12 col-sm-6">
                    <h2 className="single-info-title">{data.jewelry_name}</h2>
                    <p className="single-info-price">${data.jewelry_price}</p>
                    <p className="single-info-desc">{data.jewelry_desc}</p>
                    <p className="single-info-quantity">{`Amount Available ${data.jewelry_quantity}`}</p>
                    <p className='single-info-contact'>Call to purchase: <a className="contact-link" href="tel:123-456-7890">601-201-8688</a></p>
                </div>
            </div>
        </main >
    )
};

export default SingleJewelry;