import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class Intention extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contents = [{
            img: '/img/os.png',
            subTitle: '云数据中心操作系统',
            content: '秉承开放化、模块化、标准化计的基于虚拟化技术'

        }, {
            img: '/img/bigdata.png',
            subTitle: '复合大数据',
            content: '海量、高增长率和多样化的信息资产，提供数据处理，分析，增值能力。'

        }, {
            img: '/img/cloud.png',
            subTitle: '云计算',
            content: '用户通过电脑、笔记本、手机等方式接 入数据中心，按自己的需求进行运算。'

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