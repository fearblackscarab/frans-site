import React from "react";
import Carousel from "./Carousel";

const Home =(props)=>{
    return(
        <main className="main text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <img src="/media/home-img.jpg" alt="" className="img-fluid home-img col-12" />
                </div>
            </div>
        </main>
    )
};

export default Home;