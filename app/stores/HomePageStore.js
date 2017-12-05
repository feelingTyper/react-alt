import alt from '../alt';
import HomePageActions from '../actions/HomePageActions';

class HomePageStore {
    constructor() {
        this.bindActions(HomePageActions);
        this.message = '';
        this.title = '平台建设目标';
        this.content = `实验平台是以硬件环境（网络、服务设备、安全设备等）、软件环境（协议、服务、开发、研究等）为基础了一个网络数据智能分析与可视
                    化分析的研、产、学的综合平台。`;
    }

    onGetDefaultMessage() {
        this.message = 'cnmd';
    }
}

export default alt.createStore(HomePageStore);