import React from 'react';

class ResourcesMore extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{borderTop:'1px solid #ddd', marginTop:'-20px', paddingTop: '50px'}}>
                <div className="container resources-more">
                    <div className="title row clearfix">
                        <div className="col-xs-4 journal"><a href="journal">期刊</a></div>
                        <div className="col-xs-4 standard"><a href="standard">标准</a></div>
                        <div className="col-xs-4 patent"><a href="patent">专利</a></div>
                    </div>
                    <div className="child">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default ResourcesMore;