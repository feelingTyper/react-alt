import alt from '../alt'
import {
	assign
} from 'underscore';

class ServiceActions {
	constructor() {
		this.generateActions(
			'setMessageSuccess',
			'setMessageFail',
			'getMessageSuccess',
			'getMessageFail'
		);
	}

	getDefaultMessage() {
		$.ajax({
			url: 'api/services',
			data: {}
		}).done((data) => {
			// assign(payload, data)
			console.log(data)
			this.actions.getMessageSuccess(data);
		}).fail(() => {
			this.actions.getMessageFail(data);
		});
	}

	setMessage() {
		console.log('setMessage');
		$.ajax({
			url: 'api/setService',
			data: {}
		}).done((data) => {
			console.log('setMessage', data);
			this.actions.setMessageSuccess(data);
		}).fail((err) => {
			console.log('setMessageFail', err);
			this.actions.setMessageFail(err);
		});
	}
}

export default alt.createActions(ServiceActions);