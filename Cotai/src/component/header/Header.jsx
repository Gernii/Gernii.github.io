import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy'


class Header extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render() {
        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color = 'default-color' } = this.props;
        let logoUrl;
        if (logo === 'light') {
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        } else if (logo === 'dark') {
            logoUrl = <img src="/assets/images/logo/logo-cotai-dark.png" alt="Digital Agency" />;
        } else if (logo === 'symbol-dark') {
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        } else if (logo === 'symbol-light') {
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        } else {
            logoUrl = <img src="/assets/images/logo/logo-cotai-dark.png" alt="Digital Agency" height="66px" />;
        }

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            } else {
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        return (
            <header className={`header-area formobile-menu header--transparent header--fixed ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <Scrollspy className="mainmenu" items={['gem','about', 'team', 'services', 'contact']} currentClassName="is-current" offset={-200}>
                                <li><a href="https://gem.cot.ai/" >Gem</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#team" >Team</a></li>
                                <li><a href="#services" >Services</a></li>
                                <li><a href="#contact" >Contact Us</a></li>
                            </Scrollspy>
                        </nav>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;