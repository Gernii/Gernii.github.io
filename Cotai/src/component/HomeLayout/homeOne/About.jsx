import React, { Component } from "react";

class About extends Component {
    render() {
        let title = 'About Us',
            description = 'CoTAI was founded in 2019 to build a community of world-class AI talents to keep up with and capitalize on the exponential progress in democratizing AI. ';
        return (
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/trinh-aboutus.jpg" alt="About Images" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">
                                            {description}
                                        </p>
                                        <p>
                                        Our mission is to distill, synthesize, integrate and disseminate both best practice and state-of-the-art in AI to the community, enabling innovation and creativity for social good.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;