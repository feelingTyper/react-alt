import React from 'react';
import DevicesListActions from '../actions/DevicesListActions';
import DevicesListStores from '../stores/DevicesListStores';

class DevicesList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = DevicesListActions.getDefaultMessage();
    }

    componentDidMount() {
        DevicesListStores.listen(this.onChange);
        let _top = $('.dev-list').offset().top;

    }

    componentWillUnmount() {
        DevicesListStores.unlisten(this.Onchange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let deviceNames = ['锐捷交换机', '锐捷防火墙', '思科交换机', '天镜漏洞扫描系统', '天融信防火墙', '天融信入侵检测系统', '天融信入侵防御系统', '网闸'].map((item, index) => {
            let anchor = '#' + index;
            return (
                <li className="devices" key={index}><a style={{display:'block'}} href={anchor}>{item}</a></li>
            );
        });

        let devicesList = [{
            name: '锐捷交换机',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '锐捷交换机',
                version: 'RG-1600i',
                date: '2017-3-3',
                corporation: '锐捷'
            },
            detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
        }, {
            name: '锐捷防火墙',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '锐捷防火墙',
                version: 'RG-1600i',
                date: '2017-3-3',
                corporation: '锐捷'
            },
            detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
        }, {
            name: '思科交换机',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '思科交换机',
                version: 'RG-1600i',
                date: '2017-3-3',
                corp: '锐捷'
            },
            detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
        }, {
            name: '天镜漏洞扫描系统',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '天镜漏洞扫描系统',
                version: 'RG-1600i',
                date: '2017-3-3',
                corporation: '锐捷'
            },
            detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
        }, {
            name: '天融信NGFW防火墙（NGFW4000-UF）',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '天融信NGFW防火墙（NGFW4000-UF）',
                version: 'RG-1600i',
                date: '2017-3-3',
                corporation: '锐捷'
            },
            detail: 'NGFW ® 下一代防火墙是天融信公司凭借多年以来积累的安全产品研发与部署经验，为适应各个行业不同的网络应用环境，以及满足各类用户差异化的安全防护需求，设计并研发的多业务高性能防火墙产品。'
        }, {
            name: '天融信入侵检测系统',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '天融信入侵检测系统',
                version: 'RG-1600i',
                date: '2017-3-3',
                corp: '锐捷'
            },
            detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
        }, {
            name: '天融信入侵防御系统',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '天融信入侵防御系统',
                version: 'RG-1600i',
                date: '2017-3-3',
                corp: '锐捷'
            },
            detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
        }, {
            name: '网闸',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '网闸',
                version: 'RG-1600i',
                date: '2017-3-3',
                corp: '锐捷'
            },
            detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
        }].map((item, index) => {
            return (
                <li key={index} id={index} className="devices clearfix">
                    <div className="title" >
                        <div className="dev-name">设备名称：{item.name}</div>
                        <div className="detail">设备图片：</div>
                        <img className="img-responsive" src={item.pic} alt=""  />
                    </div>

                    <div className="dev-content">
                        <div className="detail">设备总纲：</div>
                        <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>设备名称</td>
                                <td>{item.outline.name}</td>
                            </tr>
                            <tr>
                                <td>设备型号</td>
                                <td>{item.outline.version}</td>
                            </tr>
                            <tr>
                                <td>生产日期</td>
                                <td>{item.outline.date}</td>
                            </tr>
                            <tr>
                                <td>生产公司</td>
                                <td>{item.outline.corp}</td>
                            </tr>
                        </tbody>
                        </table>
                        <div className="detail">详细简介：</div>
                        <p style={{padding: '10px'}}>
                        {item.detail}
                        </p>
                    </div>
                </li>
            )
        });

        return (
            <div className = "devices-list container" style={{borderTop: '1px solid #eee'}}>
                <div style={{textAlign: 'center', fontSize:'32px', color:'#4ab344', fontWeight: 'bold'}}>设备清单</div>
                <div className="main" style = {{marginTop: '50px', backgroundColor:'#fff'}}>
                    <div className="row clearfix">
                        <div className="left col-xs-3">
                            <ul className="dev-list">{deviceNames}</ul>
                        </div>

                        <div className = "right col-xs-9" style={{marginLeft: '-15px'}}>
                            <ul>{devicesList}</ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevicesList;