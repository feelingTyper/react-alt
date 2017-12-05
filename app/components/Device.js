import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';
import {
    Link
} from 'react-router';

class Device extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let contents = [{
            img: '/img/ruijie_sw.jpg',
            subTitle: '锐捷交换机',
            content: '划分vlan，接入局域网主机'

        }, {
            img: '/img/cisco.jpeg',
            subTitle: '思科交换机',
            content: '接入DMZ，提供web等对外服务'

        }, {
            img: '/img/tianrongxin.png',
            subTitle: '天融信防火墙',
            content: '网络入口设备，隔离网络攻击'

        }, {
            img: '/img/tianrongxin_ids.jpg',
            subTitle: '天融信入侵检测系统',
            content: '检测网络攻击，及时预警，做出安全响应'

        }];

        let contentList = contents.map((item, index) => {
            let device = '/devicesList';
            return (
                <div className="col-xs-3" style={{textAlign:'center'}} key={index}>
                    <Link to='/devicesList'>
                        <img className="img-responsive" style={{width:'262px', height: '104px'}}  src={item.img} alt=""/>
                        <p style={{marginTop:'10px'}}>{item.subTitle}</p>
                    </Link>
                    <hr/>
                    <p style={{textAlign:'center'}}>{item.content}</p>
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