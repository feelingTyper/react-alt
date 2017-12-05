import React from 'react'
import {
    Link,
    hashHistory
} from 'react-router'

class NewServiceBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let service = this.props.service;
        let type = service.type;
        let content = service.content;
        let servicesList = content.map((item, index) => {
            let blank = item.appendix ? true : false;
            if (!blank) {
                return (<li className="services-list" key={index}><a href={item.url} target="_blank">{item.name}</a></li>)
            } else {
                let path = {
                    pathname: item.url,
                    state: item.appendix
                };
                return (<li className="services-list" key={index}><Link to={path}>{item.name}</Link></li>)
            }

        });

        return (
            <div className="ns-block clearfix">
                <div className="img-wrap col-xs-2"><img src='' alt=""/></div>
                <div className="service-info col-xs-10">
                    <div className="clearfix">
                        <div className="ns-title col-xs-10">{type}</div>
                        <div className="more col-xs-2">更多</div>
                    </div>
                    <div className="ns-content" style={{display: 'none'}}>dsf</div>
                    <div className="services">
                        <ul>
                            {servicesList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewServiceBlock;