import React from 'react';
import ServiceAction from '../actions/ServiceActions';
import ServiceStore from '../stores/ServiceStore';
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
		// ServiceAction.setMessage();
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