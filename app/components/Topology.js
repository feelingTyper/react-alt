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
                <div className="device-content container-fluid">
                    <div className="row clearfix">
                        <div className="col-xs-5" style={{marginTop: '-30px'}}>
                            <h4 style={{textAlign: 'center'}}>经典网络拓扑图</h4>
                        </div>
                        <div className="col-xs-7"><img className="img-responsive" src="/img/1.jpg" alt=""/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topology;