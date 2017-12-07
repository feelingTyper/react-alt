import React from 'react';
import ResourceDesBlock from './ResourceDesBlock';

class Patent extends React.Component {
    constructor(props) {
        super(props);
        // this.state = FooterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // FooterStore.listen(this.onChange);
    }

    componentWillUnmount() {
        // FooterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        let Resources = {
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
            }, {
                id: 32,
                name: '10.CN201410785403-一种态势感知方法和装置-2014年12月-电科集团第十五所-黄文雄.pdf'
            }, {
                id: 33,
                name: '11.CN201410549654-一种基于隐Markow 模型的网络安全态势感知方法-2014年10月-江苏博智-傅涛.pdf'
            }, {
                id: 34,
                name: '12.CN201410505350-一种网络安全态势感知系统及方法-2014年9月-智慧城市信息技术有限公司-萧海东.pdf'
            }, {
                id: 35,
                name: '13.CN201410374744-面向网络态势感知的多级别网络系统-2014年7月-91655部队-王璐.pdf'
            }, {
                id: 36,
                name: '14.CN201410120989-一种基于日志和SNMP信息融合的网络安全态势感知分析方法-2014年3月-哈工大-王慧强.pdf'
            }, {
                id: 37,
                name: '15.CN201310544315-一种网络安全态势预测方法及系统-2013年11月-中科院计算所-金舒原.pdf'
            }, {
                id: 38,
                name: '16.CN201310418696-基于模糊动态贝叶斯网络的态势威胁评估-2014年1月-覃征.pdf'
            }, {
                id: 39,
                name: '17.CN201310208995-一种虚拟化环境下的云安全监测方法-2013年5月-浪潮集团-宋桂香.pdf'
            }, {
                id: 40,
                name: '18.CN201110443114-一种网络安全态势评估方法-2011年12月-中国航天706所-石波.pdf'
            }, {
                id: 41,
                name: '19.CN201110316666-一种面向云计算的网络安全预警方法-2011年10月-国网电力研究院-邓松.pdf'
            }, {
                id: 42,
                name: '20.CN201010233950-基于信息关联的网络安全态势感知系统-2010年7月-中科院计算所-席荣荣.pdf'
            }]
        };

        return (
            <div className="container resource" style={{marginTop:'50px'}}>
                <div className="resource-des"><ResourceDesBlock resource={Resources} /></div>
            </div>
        );
    }
}

export default Patent;