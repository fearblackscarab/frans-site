import React from "react";

const About = (props) => {
    return (
        <main className="main">
            <div className="container">
                <div className="about-div text-center">
                    <div className="row">
                        <div className="about-img-div col-12 col-lg-6">
                            <img src="/media/about-style.jpg" alt="" className="img-fluid about-img" />
                        </div>
                        <div className="about-section col-12 col-lg-6">
                            <h2 className="about-title">About Me</h2>
                            <p className="about-text">With each bracelet and/or necklace I use antique pins, brooches as a focal point.Custom work is available using your personal pieces of jewelry. </p>
                            <p className="about-text"> Please contact me directly at <a className="contact-link" href="tel:123-456-7890">601-201-8688</a> or email: <a className="contact-link" href="mailto: franriddellrenaissance@gmail.com">franriddellrenaissance@gmail.com.</a></p>
                            <p className="about-text">I have great respect for the workmanship and history of older vintage and antique pieces of jewelry. With that thought in mind, I carefully redesign hand selected pins/brooches and use them as a centerpieces for "one of kind" cultured Pearl bracelets and necklaces. Being aware of the principle of individuality, every piece is made with the purpose of maintaining  uniqueness. My design efforts are done with the intent to breath fresh life in to the older pieces of jewelry and incorporate them in to every bracelet and necklace as a focal point. Intended for clients who are wanting a sense of simple dignity and long-term stability in an ever changing world. Each piece of jewelry is intended to remind us to savor the past, enjoy the present, and look forward to the future. Currently the pieces are offered at select retail stores, and also sold direct. Special  feature "Trunk Shows" and consignment offers are also available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
};

export default About;