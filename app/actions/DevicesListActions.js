import alt from '../alt';

class DevicesListActions {
    constructor() {
        this.generateActions(
            'getDevicesListFail',
            'getDevicesListSucess',
        );
    }

    getDefaultMessage() {

    }
}

export default alt.createActions(DevicesListActions);