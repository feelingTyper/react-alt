import React from 'react';
import ResourceStore from '../stores/ResourceStore';
import ResourceAction from '../actions/ResourceActions';
import ResourceDes from './ResourceDes';
import ResourceData from './ResourceData';
import ResourceTools from './ResourceTools';
import HomeModuleTitle from './HomeModuleTitle';

class Resource extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = ResourceStore.getState();
    }

    componentDidMount() {
        ResourceStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ResourceStore.unlisten(this.onChange);
    }

    onChange(state) {
        ResourceStore.setState(state);
    }

    render() {

        let Resources = [{
            title: '期刊',
            journal: [{
                id: 1,
                name: '0.0【标准类】GB-T 20984-2007 信息安全技术信息安全风险评估规范.pdf'
            }, {
                id: 2,
                name: '0.1【综述类】网络态势感知研究-软件学报-2010年7月-龚正虎.pdf'
            }, {
                id: 3,
                name: '0.2【综述类】网络态势感知系统研究综述-计算机科学2-2006年-王慧强.pdf'
            }, {
                id: 4,
                name: '1.1【一级学报论文】面向多步攻击的网络安全态势评估方法-通信学报-2017年1月-杨豪璞.pdf'
            }, {
                id: 5,
                name: '1.2【一级学报论文】网络安全态势认知融合感控模型-软件学报-2016年-刘效武.pdf'
            }, ]
        }, {
            title: '标准',
            journal: [{
                id: 22,
                name: 'GBT 20270-2006 信息安全技术 网络基础安全技术要求.pdf'
            }, {
                id: 23,
                name: 'GBT 28458-2012信息安全技术 安全漏洞标识与描述规范.pdf'
            }, {
                id: 24,
                name: 'GBT 30270-2013信息技术 安全技术 信息技术安全性评估方法.doc'
            }, {
                id: 25,
                name: 'GBT 30279-2013信息安全技术 安全漏洞等级划分指南.pdf'
            }, {
                id: 26,
                name: '信息安全国家标准目录-全国信息安全标准化技术委员会.pdf'
            }]
        }, {
            title: '专利',
            journal: [{
                id: 27,
                name: '5.CN201510907420-基于大数据的网络安全态势感知预警方法-2015年12月-国家电网-刘世民.pdf'
            }, {
                id: 28,
                name: '6.CN201510815368-一种基于SDN 的多域网络安全态势感知模型-2015年11月-成都电子科技大学-唐勇.pdf'
            }, {
                id: 29,
                name: '7.CN201510593297-基于模糊粗糙集的网络安全态势评估方法-2015年9月-杭州安恒-范渊.pdf'
            }, {
                id: 30,
                name: '8.CN201510139813-一种基于证据理论的网络安全态势预测方法-2015年3月-信息工程大学-汪永伟.pdf'
            }, {
                id: 31,
                name: '9.CN201410826302-一种软件定义网络安全态势评估方法-2014年12月-西安电子科技大学-李兴华、马建峰.pdf'
            }]
        }];

        let resourceData = [{
            title: '公开的数据集',
            collections: [{
                name: 'kdd cup99',
                url: 'https://baidu.com'
            }, {
                name: 'ADFA',
                url: 'https://v.qq.com'
            }]
        }, {
            title: '实验室内部数据集',
            collections: [{
                name: 'kdd cup99',
                url: 'https://baidu.com'
            }, {
                name: 'ADFA',
                url: 'https://v.qq.com'
            }]
        }];

        let resourceTools = [{
            title: '公开的工具',
            collections: [{
                name: 'svn',
                url: 'https://baidu.com'
            }, {
                name: 'snort',
                url: 'https://v.qq.com'
            }]
        }, {
            title: '实验室内部工具',
            collections: [{
                name: 'ftp',
                url: 'https://baidu.com'
            }, {
                name: 'git',
                url: 'https://v.qq.com'
            }]
        }];

        return (
            <div className="resource clearfix">
                <div className="pic">
                </div>
                <div className="resource-des" style={{marginTop: '20px'}}>
                    <HomeModuleTitle  title={{cn: '相关文献', en: 'LITERATURE'}} />
                    <div className="container">
                        <ResourceDes  resourceDes={Resources} />
                    </div>
                </div>
                <div className="resource-data" style={{backgroundColor: '#fff',paddingBottom:'50px', marginTop:'50px'}}>
                    <ResourceData resourceData={resourceData} />
                </div>
                <div className="resource-tools">
                    <ResourceTools resourceTools={resourceTools} />
                </div>
            </div>
        )
    }
}

export default Resource;