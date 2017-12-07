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
        var _top = $('.dev-list').offset().top;
        console.log(_top);
        $(document).scroll(function() {
            if ($(document).scrollTop() > 300) {
                $('.dev-list').css({
                    top: 0
                })
            } else {
                $('.dev-list').css({
                    top: 236
                })
            }
        });

    }

    componentWillUnmount() {
        DevicesListStores.unlisten(this.Onchange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let deviceNames = ['锐捷交换机', '锐捷防火墙', '思科交换机', 'TP-LINK交换机', '天镜漏洞扫描系统', '天融信防火墙', '天融信入侵检测系统', '天融信入侵防御系统', '天融信网闸', '惠普服务器', 'IBM服务器', 'NAS磁盘柜', '思科路由器'].map((item, index) => {
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
                corporation: '锐捷'
            },
            detail: `划分vlan，在本网络结构中上连锐捷防火墙，下连台式服务器，包含内部用户区域，包括一些靶机,s
            nort服务主机。是用户域的接入交换机。`
        }, {
            name: '锐捷防火墙',
            pic: '/img/ruijie_firewall.jpg',
            outline: {
                name: '锐捷防火墙',
                version: 'RG-WALL1600-SI',
                corporation: '锐捷'
            },
            detail: `锐捷 RG-WALL 1600-si是锐捷网络推出的业内集安全、路由、交换于一体的防火墙产品，
            具有接口丰富、配置灵活的特点。它可以为用户提供完整的端到端解决方案，是网络出口和不同策略区
            域之间安全互联的理想选择，满足中小企业不断变化的网络环境和日益丰富网络应用的需要。在本网络
            结构中划分了用户域、采集汇聚域、分析域、内网用户接入域。`
        }, {
            name: '思科交换机',
            pic: '/img/cisco.jpeg',
            outline: {
                name: '思科200E系列交换机',
                version: '200E',
                date: '2017-3-3',
                corp: '思科'
            },
            detail: `划分vlan，在本网络结构中是DMZ的接入交换接，在交换机下连接HP服务器，搭建各类服务，包括mail、
            ftp、git等`
        }, {
            name: 'TP-LINK交换机',
            pic: '/img/tplink.jpg',
            outline: {
                name: 'TP-LINK交换机',
                version: '200E',
                date: '2017-3-3',
                corp: 'TP-Link'
            },
            detail: `划分vlan，在本网络结构中上连锐捷防火墙，下连天镜漏洞扫描，存储服务器，是采集汇集域的接入交换机。`
        }, {
            name: '启明星辰天镜漏洞扫描',
            pic: '/img/tianjing.png',
            outline: {
                name: '启明星辰天镜漏洞扫描',
                version: 'windows7',
                date: '2017-3-3',
                corporation: '启明星辰'
            },
            detail: `用户管理，用户审计，任务管理，策略管理，扫描功能，资产管理，报表快速查看，
            报表管理，报告导出，升级功能，检测工具，第三方接口，漏洞验证`
        }, {
            name: '天融信防火墙',
            pic: '/img/tianrongxin.png',
            outline: {
                name: '天融信NGFW防火墙',
                version: 'NGFW4000-UF',
                date: '2017-3-3',
                corporation: '天融信'
            },
            detail: `NGFW ® 下一代防火墙是天融信公司凭借多年以来积累的安全产品研发与部署经验，
            为适应各个行业不同的网络应用环境，以及满足各类用户差异化的安全防护需求，设计并研发
            的多业务高性能防火墙产品。`
        }, {
            name: '天融信入侵检测系统',
            pic: '/img/tianrongxin_ids.jpg',
            outline: {
                name: '天融信入侵检测（IDS）TopSentry',
                version: 'TopSentry',
                date: '2017-3-3',
                corp: '天融信'
            },
            detail: `天融信公司自主研发的入侵检测系统（以下简称TopSentry产品）采用旁路部署方式，
            能够实时检测包括溢出攻击、RPC攻击、WebCGI攻击、拒绝服务攻击、木马、蠕虫、系统漏洞等超
            过4000种网络攻击行为。TopSentry产品还具有应用协议智能识别、网络病毒检测、上网行为监控
            和无线入侵防御等功能，为用户提供了完整的立体式网络安全监控。`
        }, {
            name: '天融信入侵防御系统',
            pic: '/img/ruijie_sw_1.png',
            outline: {
                name: '天融信入侵防御（IPS）TopIDP',
                version: 'TopIDP',
                date: '2017-3-3',
                corp: '天融信'
            },
            detail: `天融信公司自主研发的入侵防御系统（以下简称TopIDP产品）采用在线部署方式，
            能够实时检测和阻断包括溢出攻击、RPC攻击、WebCGI攻击、拒绝服务攻击、木马、蠕虫、系
            统漏洞等超过4000种网络攻击行为，可以有效的保护用户网络IT服务资源。TopIDP产品还具
            有应用协议智能识别、流量控制、网络病毒防御、上网行为管理和无线入侵防御等功能，为
            用户提供了完整的立体式网络安全防护。`
        }, {
            name: '天融信网闸',
            pic: '/img/wangzha.jpeg',
            outline: {
                name: '天融信网闸TopRules8000',
                version: 'TopRules8000',
                date: '2017-3-3',
                corp: '天融信'
            },
            detail: `天融信安全隔离与信息交换系统TopRules是北京天融信公司基于公司自主知识产权的安全操作
            系统TOS (Topsec Operating System) 和多年网络安全产品研发经验研发而成的，该系统采用“2+1”系
            统架构，通过对信息进行落地、还原、扫描、过滤、防病毒、入侵检测、审计等一系列安全处理机制，有效
            防止黑客攻击、恶意代码和病毒渗入，同时防止内部机密信息泄露，实现网间安全隔离和信息交换。`
        }, {
            name: '惠普服务器：',
            pic: '/img/hp.png',
            outline: {
                name: '惠普服务器：',
                version: '',
                date: '2017-3-3',
                corp: '惠普'
            },
            detail: `做了虚拟化，并在虚拟化的基础上搭建了DMZ域的各类服务。`
        }, {
            name: 'IBM服务器：',
            pic: '/img/ibm.jpeg',
            outline: {
                name: 'IBM服务器：',
                version: '',
                date: '2017-3-3',
                corp: 'IBM'
            },
            detail: `上连锐捷防火墙，作为分析域，预设各类分析平台，包括tensorflow，weka等。`
        }, {
            name: 'NAS磁盘柜',
            pic: '/img/qnap.jpeg',
            outline: {
                name: 'NAS磁盘柜',
                version: 'QNAP TS-653A',
                date: '2017-3-3',
                corp: ''
            },
            detail: `上连CISCO路由器，作为内部用户存储使用，可连接无线接入。`
        }, {
            name: 'CISCO路由器',
            pic: '/img/cisco_router.jpg',
            outline: {
                name: 'NAS磁盘柜',
                version: 'QNAP TS-653A',
                date: '2017-3-3',
                corp: ''
            },
            detail: `上连锐捷防火墙，下连Qnap磁盘柜，作为内网用户无线接入点。`
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
                <div className="main" style = {{marginTop: '50px', backgroundColor:'#effefe', paddingBottom:'200px'}}>
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