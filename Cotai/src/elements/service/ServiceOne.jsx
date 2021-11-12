import React, { Component } from "react";
import { FiUsers, FiEye, FiActivity, FiBookmark } from "react-icons/fi";
const ServiceList = [
    {
        icon: <FiUsers />,
        title: 'Talents',
        description: 'Excellent in math, code, and creativity'
    },
    {
        icon: <FiEye />,
        title: 'Training',
        description: 'Fullstack AI curriculums & competencies'
    },
    {
        icon: <FiBookmark />,
        title: 'Impact',
        description: 'Innovations for social good'
    },
    {
        icon: <FiActivity />,
        title: 'Community',
        description: 'Learn from experts, pay it forward'
    },
]

class ServiceOne extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {ServiceList.map((val, i) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon-more">
                                    {val.icon}
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;