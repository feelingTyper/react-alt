import React from 'react';
import {
    Link
} from 'react-router';

class ResourceDesBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let des = this.props.resource;
        let journalList = des.journal.map((journal, index) => {
            return (
                <div className="paper-item clearfix" key={index}>
                <div className="col-xs-10"><Link to={journal.url}>{journal.name}</Link></div>
                <div className="col-xs-2 download more">下载</div>
                </div>
            );
        });

        return (
            <div className="des-block">
                <div className="des-title">
                    {des.title}
                </div>
                <div className="des-content">
                    <div className="papers">
                    {journalList}
                    </div>
                </div>
            </div>
        )
    }
}

export default ResourceDesBlock;