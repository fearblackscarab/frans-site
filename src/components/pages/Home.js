import React from "react";
import Carousel from "./Carousel";

const Home =(props)=>{
    return(
        <main className="main text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <img src="/media/about-placeholder.jpg" alt="" className="img-fluid home-img col-12" />
                    <div className="home-title-div col-8">
                        <h2 className="home-title">Home Page Info</h2>
                        <p className="home-title-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, delectus possimus! Illo deserunt aut facilis esse excepturi similique hic asperiores aliquam minus magnam, earum iusto tempora impedit quas nobis. Nesciunt fuga, enim inventore nam laborum id, accusantium soluta qui accusamus iure repudiandae. Alias eveniet velit architecto deserunt ullam, saepe vitae?</p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Home;