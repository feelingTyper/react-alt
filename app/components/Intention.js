import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class Intention extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contents = [{
            img: '/img/os.png',
            subTitle: '实现满足科研需求的功能',
            content: '提供实验网络环境，实验数据，测试环境，数据分析算法和系统'

        }, {
            img: '/img/bigdata.png',
            subTitle: '实现应用需求的功能',
            content: '功能原型验证，安全问题浮现与原型的功能展示，功能产品的验证'

        }, {
            img: '/img/cloud.png',
            subTitle: '实现人才培养需求的功能',
            content: '提供实验网络环境，工具环境，网络安全时间复现规程，提供演示和实践环境'

        }];

        let contentList = contents.map((item, index) => {
            return (
                <div className="col-xs-4" style={{textAlign:'center'}} key={index}>
                    <img src={item.img} alt=""/>
                    <p>{item.subTitle}</p>
                    <img src="/img/line.png" alt=""/>
                    <p style={{textAlign:'left'}}>{item.content}</p>
                </div>
            )
        })
        return (
            <div className="intent">
                <HomeModuleTitle title= {{cn: '目标', en: '——  INTENTION  ——'}} />
                <div className="intent-content container">
                    <div className="row clearfix">
                    <a href="/intention">{contentList}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intention;