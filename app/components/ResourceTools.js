import React from 'react';
import ResourceDataBlock from './ResourceDataBlock'

class ResourceTools extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let datas = this.props.resourceTools;
        let dataList = datas.map((data, index) => {
            return (
                <div className="col-xs-6" key={index}>
                    <ResourceDataBlock resourceData={data} usefor="tools" />
                </div>
            );
        })

        return (
            <div className="container">
                <div className="tools-title clearfix">
                    <div className="circle">
                        <h2>工具</h2>
                    </div>
                </div>
                <div className="row clearfix">
                    {dataList}
                </div>
            </div>
        )

    }
}

export default ResourceTools;