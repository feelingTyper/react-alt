import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class News extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let dataList = [1, 2, 3, 4].map((item, index) => {
            if (index % 2) {
                var classname = 'col-xs-5  news clearfix col-xs-offset-2';
            } else {
                var classname = 'col-xs-5  news clearfix';
            }
            return (
                <div className={classname} key={index} style={{marginTop: '10px'}}>
                    <div className="title row clearfix">
                        <div className="col-xs-8">实验室内部举办第三次内部讨论会议</div>
                        <div className="col-xs-4" style={{textAlign: 'right'}}>2017-11-19</div>
                    </div>
                    <div className="content">
                    关于网站建设方面的问题作出了认真而详细的分析，并与员学生做深入的探讨，得出满意的结果...</div>
                </div>
            )
        })
        return (
            <div className="device">
                <HomeModuleTitle title= {{cn: '最新资讯', en: '——  NEWS  ——'}} />
                <div className="device-content container">
                    <div className="row clearfix">
                        {dataList}
                    </div>
                </div>
            </div>
        )
    }
}

export default News;