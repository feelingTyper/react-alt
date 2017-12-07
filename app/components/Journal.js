import React from 'react';
import ResourceDesBlock from './ResourceDesBlock';

class Journal extends React.Component {
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
                id: 1,
                name: '0.0【标准类】GB-T 20984-2007 信息安全技术信息安全风险评估规范.pdf'
            }, {
                id: 2,
                name: '0.1【综述类】网络态势感知研究-软件学报-2010年7月-龚正虎.pdf',
            }, {
                id: 3,
                name: '0.2【综述类】网络态势感知系统研究综述-计算机科学2-2006年-王慧强.pdf',
            }, {
                id: 4,
                name: '1.1【一级学报论文】面向多步攻击的网络安全态势评估方法-通信学报-2017年1月-杨豪璞.pdf',
            }, {
                id: 5,
                name: '1.2【一级学报论文】网络安全态势认知融合感控模型-软件学报-2016年-刘效武.pdf',
            }, {
                id: 6,
                name: '1.3【一级学报论文】基于多选项二次联合背包的态势感知资源分配算法-通信学报-2016年12月-孙岩炜.pdf',
            }, {
                id: 7,
                name: '1.4【一级学报论文】基于环境属性的网络威胁态势量化评估方法-软件学报-2015年-席荣荣.pdf'
            }, {
                id: 8,
                name: '1.5【一级学报论文】一种改进的网络安全态势量化评估方法-计算机学报-2015年4月-席荣荣.pdf',
            }, {
                id: 9,
                name: '1.6【一级学报论文】在线监测的路由器安全威胁态势量化评估方法-通信学报-2013年11月-杨君刚.pdf'
            }, {
                id: 10,
                name: '1.7【一级学报论文】基于Markov博弈模型的网络安全态势感知方法-软件学报-2011年-张勇.pdf'
            }, {
                id: 11,
                name: '1.8【一级学报论文】基于日志审计与性能修正算法的网络安全态势评估模型-计算机学报-2009年4月-韦勇.pdf'
            }, {
                id: 12,
                name: '1.9【一级学报论文】层次化网络安全威胁态势量化评估方法-软件学报-2006年4月-陈秀真.pdf'
            }, {
                id: 13,
                name: '2.1【EI检索论文】一种基于目标攻击图的态势威胁评估方法-北京邮电大学学报-2015年2月-刘威歆.pdf'
            }, {
                id: 14,
                name: '2.2【EI检索论文】层次化网络信息内容安全事件态势评估模型-吉林大学学报(工学版)-2016年3月-葛琳.pdf'
            }, {
                id: 15,
                name: '2.3【EI检索论文】基于聚类分析的网络安全态势评估方法-上海交通大学学报-2016年9月-文志诚.pdf'
            }, {
                id: 16,
                name: '2.4【EI检索论文】基于时间序列分析的网络安全态势预测-华南理工大学学报(自然科学版)-2016年5月-文志诚.pdf'
            }, {
                id: 17,
                name: '2.5【EI检索论文】基于主机与云分析结合的轻量级威胁感知系统-华中科技大学学报-2016年3月-彭国军.pdf'
            }, {
                id: 18,
                name: '2.6【EI检索论文】态势感知水平的解析化度量模型-系统工程与电子技术-2016年8月-张东戈.pdf'
            }, {
                id: 19,
                name: '2.7【EI检索论文】工控网络安全态势感知算法实现-控制理论与应用-2016年8月-陆耿虹.pdf'
            }, {
                id: 20,
                name: '2.8【EI检索论文】基于APDE-RBF神经网络的网络安全态势预测方法-系统工程与电子技术-2016年12月-李方伟.pdf'
            }, {
                id: 21,
                name: '2.9【EI检索论文】基于信息融合的网络安全态势量化评估方法-北京航空航天大学学报-2016年8月-文志诚.pdf'
            }]
        };

        return (
            <div className="container resource" style={{marginTop:'50px'}}>
                <div className="resource-des"><ResourceDesBlock resource={Resources} /></div>
            </div>
        );
    }
}

export default Journal;