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
                    <div className="be-title">{this.state.title}</div>
                    <div className="be-content">{this.state.content}</div>
                </div>
                <div className="home-intention"  style={{padding: '50px 0', backgroundColor: '#e0e0e0'}} ><Intention /></div>
                <div className="home-topology" style={{backgroundColor: '#fff', padding:'50px 0'}}><Topology /></div>
                <div className="home-device" style={{backgroundColor:'#f0f3f4', padding: '50px 0'}}><Device /></div>
                <div className="home-news" style={{backgroundColor:'#fff', padding:'50px 0'}}><News /></div>
            </div>
        );
    }
}

export default HomePage;