import React from 'react';
import ResourceDataBlock from './ResourceDataBlock';
import HomeModuleTitle from './HomeModuleTitle';

class ResourceData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let datas = this.props.resourceData;
        let dataList = datas.map((data, index) => {
            let classstyle = index % 2 == 0 ? 'col-xs-5' : 'col-xs-5 col-xs-offset-2';
            return (
                <div className={classstyle} key={index}>
                    <ResourceDataBlock resourceData={data} usefor="dataset" />
                </div>
            );
        })

        return (
            <div className="container">
                <div style={{marginTop: '20px'}}><HomeModuleTitle title= {{cn: '数据集', en: 'DATASET'}} /></div>
                <div className="row clearfix">
                    {dataList}
                </div>
            </div>
        )
    }
}

export default ResourceData;