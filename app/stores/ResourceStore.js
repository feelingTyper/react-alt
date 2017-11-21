import alt from '../alt'
import ResourceActions from '../actions/ResourceActions'

class ResourceStore {
    constructor() {
        this.bindActions(ResourceActions);
        this.resource = [];
    }

    onGetResource() {
        this.resource.push('resource');
    }

    onGetResourceSuccess() {

    }

    onGetResourceFail() {

    }
}

export default alt.createStore(ResourceStore);