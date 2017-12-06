import React from 'react';

class IntentionDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{borderTop:'1px solid #ddd', marginTop:'-20px', paddingTop: '50px'}}>
            <div className="container intention-detail">
                <div className="legend">平台建设详细目标</div>
                <div className="topo clearfix" style={{marginBottom: '50px'}}>
                    <img src="/img/topology.jpg" alt=""/>
                    <div className="topo-des">
                        <h5 style={{marginBottom:'20px', fontWeight:'bold'}}>网络拓扑功能详解：</h5>
                        <p>DMZ域部署多种公开服务；模拟攻击域实现攻击和数据重放等功能</p>
                        <p>智能感知分析与数据处理平台包括了Tensorflow等框架及数据预处理功能</p>
                        <p>监测/采集模块包括了安全设备、网络设备和主机/服务器等设备上的监测与采集功能</p>
                        <p>多源多层次数据：网络流量数据、审计数据、网络设备日志、安全设备日志、设备性能等</p>
                    </div>
                </div>
                <div className="research clearfix" >
                    <div className="legend">研究内容</div>
                    <div className="row" style={{marginTop: '40px'}}>
                        <div className="col-xs-4"><p><em>1</em>网络多源多层次数据采集及预处理</p></div>
                        <div className="col-xs-4"><p><em>2</em>日志异常检测与筛选技术</p></div>
                        <div className="col-xs-4"><p><em>3</em>关键节点/网络的安全评估方法</p></div>
                        <div className="col-xs-4"><p><em>4</em>网络攻击智能预警及防御技术</p></div>
                        <div className="col-xs-4"><p><em>5</em>可视化技术</p></div>
                    </div>
                </div>

                <div className="intention" style={{marginBottom: '50px'}}>
                    <div className="legend" style={{marginBottom: '50px'}}>
                        研究目标
                    </div>
                    <table className="table table-striped table-bordered" id="intention">
                        <thead>
                            <tr>
                                <th>需求</th>
                                <th>功能</th>
                                <th>目标</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h5 style={{marginBottom:'20px', fontWeight:'bold'}}> 科研方面：</h5>
                                    <p>1）模拟特定网络环境：能够模拟特定真实网络环境</p>
                                    <p>2）大量实验数据：能够产生和获取拟研究问题的大量实验数据</p>
                                    <p>3）需测评特定设备：在特定网络环境中，能够对设备进行漏洞等安全问题的测评</p>
                                    <p>4）数据分析：基于AI等算法和框架进行数据分析</p>
                                </td>
                                <td>
                                    <p>1）提供实验网络环境</p>
                                    <p>2）提供实验数据</p>
                                    <p>3）提供测评环境</p>
                                    <p>4）提供数据分析算法和系统</p>
                                </td>
                                <td>
                                    I 实现满足科研需求的功能
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h5 style={{marginBottom:'20px', fontWeight:'bold'}}> 应用方面：</h5>
                                    <p>1）研究成果转化为功能原型</p>
                                    <p>2）将特定安全问题及研究成果利用对应功能原型进行演示</p>
                                    <p>3）功能原型转化为功能产品</p>
                                </td>
                                <td>
                                    <p>1）功能原型的验证</p>
                                    <p>2）安全问题复现与功能原型的功能展示</p>
                                    <p>3）功能产品的验证</p>
                                </td>
                                <td>
                                    II 实现应用需求的功能
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h5 style={{marginBottom:'20px', fontWeight:'bold'}}> 人才培养方面：</h5>
                                    <p>1）需网络攻防的实际网络</p>
                                    <p>2）需进行网络攻防工具环境</p>
                                    <p>3）需演示和实践环境</p>
                                </td>
                                <td>
                                    <p>1）提供实验网络环境</p>
                                    <p>2）提供工具环境</p>
                                    <p>3）提供网络安全事件复现规程</p>
                                    <p>4）提供演示和实践环境</p>
                                </td>
                                <td>
                                    III实现人才培养需求的功能
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }
}

export default IntentionDetail;