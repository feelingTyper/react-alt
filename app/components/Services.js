import React from 'react';
import ServiceAction from '../actions/ServiceActions';
import ServiceStore from '../stores/ServiceStore';
import ServiceBlock from './ServiceBlock';
import NewServiceBlock from './NewServiceBlock';
import ReactCSSTransitionGroup from 'react-transition-group/TransitionGroup';
import HomeModuleTitle from './HomeModuleTitle';


class Service extends React.Component {
	constructor(props) {
		super(props);
		this.state = ServiceStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		ServiceStore.listen(this.onChange);
		ServiceAction.getDefaultMessage();
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
		ServiceStore.unlisten(this.onChange);
	}

	onChange(state) {
		console.log('state', state)
		this.setState(state);
	}

	render() {
		let message = this.state.message;
		let services = this.state.services;
		let services1 = [{
			serviceName: 'web服务',
			serviceInfo: `React编写的web服务,等等，哈哈开始的恢复快速的反馈撒旦法
			覆盖`,
			imgsrc: '/img/u12.png',
			linkto: '/'
		}, {
			serviceName: 'mail',
			serviceInfo: `this is a mail service. but you can still find this 
			.`,
			imgsrc: '/img/u13.png',
			linkto: '/'
		}, {
			serviceName: 'SVN',
			serviceInfo: `React编写的web服务,等等，哈哈开始的恢复快速的反馈撒旦法
			阿斯顿发链接撒地方啦上大幅拉升的减肥啦水电费是打发第`,
			imgsrc: '/img/u12.png',
			linkto: '/'
		}, {
			serviceName: 'mail',
			serviceInfo: `this is a mail service. but you can still find this 
			.`,
			imgsrc: '/img/u13.png',
			linkto: '/'
		}, {
			serviceName: 'GitHub',
			serviceInfo: `React编写的web服务,等等，哈哈开始的恢复快速的反馈撒旦法
			阿斯顿发链接撒地方啦上大幅拉升的
			`,
			imgsrc: '/img/u12.png',
			linkto: '/'
		}, {
			serviceName: 'mail',
			serviceInfo: `this is a mail service. but you can still find this 
			version via https://github.com/lshaluminum/footer/react-demo.git.
			.`,
			imgsrc: '/img/u13.png',
			linkto: '/'
		}]
		let ServiceBlocks = services.map((obj, index) => {
			return (
				<div key={index} className="col-xs-12" style={{marginBottom:'100px'}}>
					<NewServiceBlock service={obj} />
				</div>
			)
		});
		return (
			<div className="service">
				<div className="pic">
				</div>
				<HomeModuleTitle  title={{cn: '服务', en: 'SERVICE'}} />
				<div className="container" style={{marginTop: '20px'}}>
					<div className="row clearfix">
						{ServiceBlocks}
					</div>
				</div>
			</div>
		)
	}


}

export default Service;