import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Education & Training',
        description: 'We provide project-based competency-focused intuitive learning from fullstack AI experts.'
    },
    {
        icon: <FiLayers />,
        title: 'Research and Development',
        description: 'We distill, synthesize and integrate both best practice and SOTA in AI to turn novel algorithms into products.'
    },
    {
        icon: <FiUsers />,
        title: 'Innovative Solutions & Products',
        description: 'We leverage AI to power our creativity & productivity for better life.'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'We nurture young talents, keep up with and capitalize on SOTA in AI, to invent practically useful products for social good.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="javascript:void(0)">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
