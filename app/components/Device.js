import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class Device extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contents = [{
            img: '/img/1.jpg',
            subTitle: '云数据中心操作系统',
            content: '秉承开放化、模块化、标准化计的基于虚拟化技术'

        }, {
            img: '/img/2.jpg',
            subTitle: '复合大数据',
            content: '海量、高增长率和多样化的信息资产，提供数据处理，分析，增值能力。'

        }, {
            img: '/img/3.jpg',
            subTitle: '云计算',
            content: '用户通过电脑、笔记本、手机等方式接 入数据中心，按自己的需求进行运算。'

        }, {
            img: '/img/4.jpg',
            subTitle: '云计算',
            content: '用户通过电脑、笔记本、手机等方式接 入数据中心，按自己的需求进行运算。'

        }];

        let contentList = contents.map((item, index) => {
            return (
                <div className="col-xs-3" style={{textAlign:'center'}} key={index}>

                    <img className="img-responsive" src={item.img} alt=""/>
                    <p>{item.subTitle}</p>
                    <img src="/img/line1.png" alt=""/>
                    <hr/>
                    <p style={{textAlign:'left'}}>{item.content}</p>
                </div>
            )
        })
        return (
            <div className="device">
                <HomeModuleTitle title= {{cn: '设备', en: '——  DEVICE  ——'}} />
                <div className="device-content container">
                    <div className="row clearfix">
                    {contentList}
                    </div>
                </div>
            </div>
        )
    }
}

export default Device;