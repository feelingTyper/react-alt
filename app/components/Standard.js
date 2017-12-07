import React from 'react';
import ResourceDesBlock from './ResourceDesBlock';

class Standard extends React.Component {
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
                id: 22,
                name: 'GBT 20270-2006 信息安全技术 网络基础安全技术要求.pdf'
            }, {
                id: 23,
                name: 'GBT 28458-2012信息安全技术 安全漏洞标识与描述规范.pdf',
            }, {
                id: 24,
                name: 'GBT 30270-2013信息技术 安全技术 信息技术安全性评估方法.doc',
            }, {
                id: 25,
                name: 'GBT 30279-2013信息安全技术 安全漏洞等级划分指南.pdf',
            }, {
                id: 26,
                name: '信息安全国家标准目录-全国信息安全标准化技术委员会.pdf',
            }]
        };

        return (
            <div className="container resource" style={{marginTop:'50px'}}>
                <div className="resource-des"><ResourceDesBlock resource={Resources} /></div>
            </div>
        );
    }
}

export default Standard;