import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Center of Talent in AI </title>
                    <meta name="description" content="CoTAI was founded in 2019 to build a community of world-class AI talents to keep up with and capitalize on the exponential progress in democratizing AI. Our mission is to distill, synthesize, integrate and disseminate both best practice and state-of-the-art in AI to the community, enabling innovation and creativity for social good." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
