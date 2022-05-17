import React from "react";
import Product from "./Product";

const Carousel = (props) => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="placeholder">
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

                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="placeholder">
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
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="placeholder">
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
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="placeholder">
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
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
};

export default Carousel;