import React from 'react';
import ResourceDataBlock from './ResourceDataBlock';
import HomeModuleTitle from './HomeModuleTitle';

class ResourceTools extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let datas = this.props.resourceTools;
        let dataList = datas.map((data, index) => {
            let classstyle = index % 2 == 0 ? 'col-xs-5' : 'col-xs-5 col-xs-offset-2';
            return (
                <div className={classstyle} key={index}>
                    <ResourceDataBlock resourceData={data} usefor="tools" />
                </div>
            );
        })

        return (
            <div className="container">
                <div className="tools-title clearfix">
                    <div style={{marginTop: '20px'}}><HomeModuleTitle title= {{cn: '工具', en: 'TOOLS'}} /></div>
                </div>
                <div className="row clearfix">
                    {dataList}
                </div>
            </div>
        )

    }
}

export default ResourceTools;