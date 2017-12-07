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
            let url = '/download/' + journal.id;
            return (
                <div className="paper-item clearfix" key={index}>
                    <div className="col-xs-10"><Link to={url} target="_blank">{journal.name}</Link></div>
                    <div className="col-xs-2"><a href="">读后评</a></div>
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