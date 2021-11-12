import React, { Component } from "react";
const brandLink ={
    VTC: 'https://vtc.edu.vn/en/',
    AiNovation: 'https://www.ainovation.com',
    FPT: 'https://www.fpt-software.com',
    KGroup: 'https://k-group.asia',
    KhaKim: 'https://theshineshop.vn',
    LeHongPhongHighSchool: 'http://www.thpt-lehongphong-tphcm.edu.vn',
    Gambaru : 'https://gambaru.io',
    Gianty : 'https://www.gnt.com.vn',
}
class BrandTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="brand-style-2">
                    <li>
                        <a href={brandLink.VTC} >
                            <img className="black-white-img" src="/assets/images/brand/vtca.png" />
                        </a>
                    </li>
                    <li>
                        <a href={brandLink.AiNovation} >
                            <img className="black-white-img" src="/assets/images/brand/ainovation-logo.png" />
                        </a>
                    </li>
                    <li>
                        <a href={brandLink.VTC} >
                            <img className="black-white-img" src="/assets/images/brand/fptsoftware.png" />
                        </a>
                    </li>
                    <li>
                        <a href={brandLink.KGroup} >
                            <img className="black-white-img" src="/assets/images/brand/kgroup.png" />
                        </a>
                    </li>
                    <li>
                        <a href={brandLink.KhaKim} >
                            <img className="black-white-img" src="/assets/images/brand/khakim.png" />
                        </a>
                    </li>
                    <li>
                        <a href={brandLink.LeHongPhongHighSchool} >
                            <img className="black-white-img" src="/assets/images/brand/lehongphong.png" />
                        </a>
                    </li>
                    <li>
                        <a href={brandLink.Gambaru} >
                            <img className="black-white-img-need" src="/assets/images/brand/gambaru.svg" />
                        </a>
                    </li>
                    <li>
                        <a href={brandLink.Gianty} >
                            <img className="black-white-img-need" src="/assets/images/brand/gianty.svg" />
                        </a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;