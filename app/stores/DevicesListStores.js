import alt from '../alt';
import DevicesListActions from '../actions/DevicesListActions';

class DevicesListStores {
    constructor() {
        this.bindActions(DevicesListActions);
    }

    onGetDevicesListFail() {

    }

    onGetDevicesListSuccess() {

    }
}

export default alt.createStore(DevicesListStores);