import React from 'react';
import ResourceDataBlock from './ResourceDataBlock';

class ResourceData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let datas = this.props.resourceData;
        let dataList = datas.map((data, index) => {
            return (
                <div className="col-xs-6" key={index}>
                    <ResourceDataBlock resourceData={data} usefor="dataset" />
                </div>
            );
        })

        return (
            <div className="container">
                <div className="res-data-title"><h2>数据</h2></div> 
                <div className="row clearfix">
                    {dataList}
                </div>
            </div>
        )
    }
}

export default ResourceData;