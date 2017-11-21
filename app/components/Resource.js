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
                name: 'semantic method to just the page.',
                url: 'http://baidu.com'
            }, {
                name: 'semantic method to just the page.',
                url: 'http://baidu.com'
            }, {
                name: 'semantic method to just the page.',
                url: '/'
            }]
        }, {
            title: '标准',
            journal: [{
                name: 'semantic method to just the page.',
                url: 'http://baidu.com'
            }, {
                name: 'semantic method to just the page.',
                url: 'http://baidu.com'
            }, {
                name: 'semantic method to just the page.',
                url: '/'
            }]
        }, {
            title: '专利',
            journal: [{
                name: 'semantic method to just the page.',
                url: 'http://baidu.com'
            }, {
                name: 'semantic method to just the page.',
                url: 'http://baidu.com'
            }, {
                name: 'semantic method to just the page.',
                url: '/'
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
                
                <div className="resource-des" style={{marginTop: '20px'}}>
                    <div className="pic">
                    </div>
                    <HomeModuleTitle  title={{cn: '论文', en: 'PAPER'}} />
                    <div className="container">
                        <ResourceDes  resourceDes={Resources} />
                    </div>
                </div>
                <div className="resource-data" style={{backgroundColor: '#f0f3f5',paddingBottom:'50px'}}>
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