import React from 'react'
import {
    Link
} from 'react-router'

class NewServiceBlock extends React.Component {
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
            <div className="ns-block clearfix">
                <div className="img-wrap col-xs-2"><img src={imgsrc} alt=""/></div>
                <div className="service-info col-xs-10">
                    <div className="clearfix">
                        <div className="ns-title col-xs-10">{serviceName}</div>
                        <div className="more col-xs-2">查看</div>
                    </div>
                    <div className="ns-content">{info}</div>
                </div>
            </div>
        )
    }
}
export default NewServiceBlock;