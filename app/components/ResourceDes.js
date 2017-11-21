import React from 'react';
import ResourceDesBlock from './ResourceDesBlock';
import {
    Link
} from 'react-router';

class ResourceDes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let resourceDes = this.props.resourceDes;
        let resourceList = resourceDes.map((resource, index) => {
            return (
                <div className="col-xs-12" style={{marginBottom: '100px'}} key={index}>
                    <ResourceDesBlock resource={resource} />
                    <div className="more col-xs-2 col-xs-offset-5">more</div>
                </div>
            )
        });

        return (
            <div className="resource-des clearfix" >
                {resourceList}
            </div>
        )
    }
}

export default ResourceDes;