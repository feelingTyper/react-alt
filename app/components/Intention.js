import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class Intention extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contents = [{
            img: '/img/os.png',
            subTitle: '攻防实验平台',
            content: '攻击防御实验，模拟真实网络运行状态，感知网络态势'

        }, {
            img: '/img/bigdata.png',
            subTitle: '大数据分析',
            content: 'hadoop分布式数据存储计算平台，海量数据融合分析处理'

        }, {
            img: '/img/cloud.png',
            subTitle: '数据开放服务',
            content: '论文算法，公开数据集，实验室内部数据集开放下载服务'

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
                <HomeModuleTitle title= {{cn: '目标', en: '——  SERVICE  ——'}} />
                <div className="intent-content container">
                    <div className="row clearfix">
                    {contentList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Intention;
