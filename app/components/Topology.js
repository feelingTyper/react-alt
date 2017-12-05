import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class Topology extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="device">
                <HomeModuleTitle title= {{cn: '拓扑', en: '——  TOPOLOGY  ——'}} />
                <div className="device-content container">
                    <div className="row clearfix">
                        <div className="col-xs-4" style={{marginTop: '-30px'}}>
                            <h4 style={{textAlign: 'center'}}>经典网络拓扑图</h4>
                            <p style={{marginTop: '30px',lineHeight:'40px'}}>平台在入口防火墙和核心交换机下共分为四个域
                            ：DMZTrust&nbsp;&nbsp;Untrust&nbsp;&nbsp;User&nbsp;&nbsp;Management。其中DMZ域中包括对外服务的服务器集群，
                            Trust域中包括证书服务器和云服务平台，Untrust域中包含一个VPN通道，
                            User域中是内网的用户终端，Management域中包含一台集中日志服务器和SFTP服务器，
                            每个区域中都有一套安全服务组，包含APT、IDS、漏洞扫描和终端防护等安全设备。</p>
                        </div>
                        <div className="col-xs-8"><img className="imqg-responsive" style={{width:'100%',height:'100%'}} src="/img/topology.jpg" alt=""/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topology;