import React from 'react'
import {
    Link
} from 'react-router'

class ServiceBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let service = this.props.service;
        let imgsrc = service.imgsrc;
        let info = service.content;
        let serviceName = service.title;
        let linkto = service.linkto;

        return (
            <div className="ns-block">
                <Link to={linkto} className="service-name">{serviceName}</Link>
                <div className="img-wrap"><img src={imgsrc} alt=""/></div>
                <div className="service-info">
                {info}
                </div>
            </div>
        )
    }
}
export default ServiceBlock;