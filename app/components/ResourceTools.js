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
            return (
                <div className="col-xs-4 tool" key={index}>
                <a className="clearfix" href={data.url} target="_blank">
                    <img className="img-responsive" src="/img/tools.jpg" style={{width:'50px', height:'50px'}} alt=""/>
                    <div>{data.name}</div>
                </a>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="tools-title clearfix">
                    <div style={{marginTop: '20px'}}><HomeModuleTitle title= {{cn: '工具', en: 'TOOLS'}} /></div>
                </div>
                <div className="row clearfix tools">
                    {dataList}
                </div>
            </div>
        )

    }
}

export default ResourceTools;