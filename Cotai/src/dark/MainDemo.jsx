import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";

class MainDemo extends Component {
    render() {
        const PostList = BlogContent.slice(0, 3);
        return (
            <div className="active-dark">
                <Helmet pageTitle="CoTAI" />
                <Header headertransparent="header--transparent" color="color-black" colorblack="color--black" logoname="logo.png" />

                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div id="about" className="fix">
                    <div className="about-area about-position-top pb--120 about-section-color">
                        <About />
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Testimonial Area */}
                <div id="team" className="fix">
                    <div className="rn-testimonial-area bg_color--5 ptb--120">
                        <div className="container">
                            <Testimonial />
                        </div>
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Service Area  */}
                <div id="services" className="fix">
                    <div className="service-area ptb--80  bg_image bg_image--3">
                        <div className="container">
                            <ServiceTwo />
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation pb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <div id="contact" className="fix">
                    <Footer />
                </div>

            </div>
        )
    }
}
export default MainDemo;