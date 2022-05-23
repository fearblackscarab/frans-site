import React, { useEffect, useState } from "react";
import Product from "../parts/Product";

const Home = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:3001/api/jewelry/group/1';
        fetch(url).then(res => res.json()).then(item => setData(item));
    }, []);
    return (
        <main className="main text-center">
            <div className="container">
                <div className="row">
                    <div className="homeimg-div col-12">
                        <img src="/media/home-img.jpg" alt="" className="img-fluid home-img" />
                    </div>
                    <div className="col-12">
                    <h2 className="featured">Featured Products</h2>
                    </div>
                    <div className="card-group col-12">
                        {data.map(item => {
                            if (item.jewelry_id === 1 || item.jewelry_id === 2 || item.jewelry_id === 4) {
                                return (
                                    <div className="product col-sm-6 col-md-4">
                                        <Product key={item.jewelry_id} id={item.jewelry_id} img={item.jewelry_img} name={item.jewelry_name} desc={item.jewelry_desc} />
                                    </div>
                                )
                            }
                            return(
                                console.log('featured loaded')
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Home;