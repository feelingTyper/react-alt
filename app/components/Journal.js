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
                name: 'semantic method to just the page.',
                url: 'http://baidu.com'
            }, {
                name: 'semantic method to just the page.',
                url: '/'
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