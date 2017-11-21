import alt from '../alt'
import ServiceActions from '../actions/ServiceActions'

class ServiceStore {
	constructor() {
		this.bindActions(ServiceActions);
		this.message = '';
		this.services = []
	}

	onSetMessageSuccess(payload) {
		this.message = payload.message;
	}

	onSetMessageFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onGetMessageSuccess(payload) {
		this.services.push(payload);
	}

	onGetMessageFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onGetDefaultMessage() {
		this.message = ''
	}

}

export default alt.createStore(ServiceStore);