import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'http://facebook.com/cotaivn' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/cotai' },
    { Social: <FaInstagram />, link: 'javascript:void(0)' },
    { Social: <FaTwitter />, link: 'javascript:void(0)' },
]
const Location = {
    AnSuong: 'https://www.google.com/maps/place/MDN+building/@10.8458901,106.6145654,17z/data=!3m1!4b1!4m5!3m4!1s0x31752b0733df578d:0x176cb06b6ce2d507!8m2!3d10.8459893!4d106.6166801',
    LeHongPhongSchool: 'https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+THPT+chuy%C3%AAn+L%C3%AA+H%E1%BB%93ng+Phong/@10.7640773,106.679528,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f1ebae67e55:0xcf4ea923cda9ed8!8m2!3d10.7640755!4d106.6817118',
    NguyenSySach: 'https://www.google.com/maps/place/F%2FC+Coffee/@10.8211744,106.6369177,21z/data=!4m13!1m7!3m6!1s0x3175296504f6eeaf:0x7aee623f96a50e4b!2zOSBOZ3V54buFbiBT4bu5IFPDoWNoLCBQaMaw4budbmcgMTUsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!3b1!8m2!3d10.823038!4d106.6384633!3m4!1s0x3175290acc53959b:0xa1f1474055c95f10!8m2!3d10.8211348!4d106.6368842',
}
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            
                            <div className="col-lg-12">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-8 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>COLLABORATE WITH US</h4>
                                                <ul className="ft-link">
                                                    <li><label>EMAIL: </label> <a className="d-block" href="mailto:contact@cot.ai">contact@cot.ai</a></li>
                                                    <li><label>PHONE: </label><a className="d-block" href="javascript:void(0)">+84 (0) 815 503 467</a></li>
                                                    <li><label>ADDRESS: </label>
                                                        <a className="d-block" href={Location.AnSuong}>An Suong Office space - MDN building, District 12, HCMC</a>
                                                    </li>
                                                    <li><label>&nbsp;</label>
                                                        <a className="d-block" href={Location.NguyenSySach}>147/9 Nguyễn Sỹ Sách, P.15, Q.Tân Bình, TP.HCM</a>
                                                    </li>
                                                    <li><label>&nbsp;</label>
                                                        <a className="d-block" href={Location.LeHongPhongSchool}>Trường THPT Chuyên Lê Hồng Phong, 235 Nguyễn Văn Cừ, Q.5, TP.HCM</a>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        {/* Start Single Widget  */}
                                        <div className="col-lg-4 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>GET IN TOUCH</h4>
                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val, i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2019-2021 CoTAI. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;