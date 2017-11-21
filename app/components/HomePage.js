import React from 'react';
import HomePageStore from '../stores/HomePageStore';
import HomePageActions from '../actions/HomePageActions';
import Carousel from './Carousel';
import Intention from './Intention';
import Device from './Device';
import Topology from './Topology';
import News from './News';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = HomePageStore.getState();
    }

    componentDidMount() {
        HomePageStore.listen(this.onChange);
        HomePageActions.getDefaultMessage();
    }

    componentWillUnmount() {
        HomePageStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-carousel"><Carousel /></div>
                <div className="container before-intention">
                    <div className="be-title">产品用心、服务贴心、品牌知心</div>
                    <div className="be-content">有限公司旗下的软件集成与系统解决方案供应商品牌，公司注册资本5000万，专注于为金融企业、事业单位、中小企业、小微企业提供软件技术服务，
助力企业“互联网+”进程。</div>
                </div>
                <div className="home-intention"  style={{padding: '50px 0', backgroundColor: '#e0e0e0'}} ><Intention /></div>
                <div className="home-device" style={{backgroundColor:'#fff', padding: '50px 0'}}><Device /></div>
                <div className="home-topology" style={{backgroundColor: '#f0f3f4', padding:'50px 0'}}><Topology /></div>
                <div className="home-news" style={{backgroundColor:'#fff', padding:'50px 0'}}><News /></div>
            </div>
        );
    }
}

export default HomePage;