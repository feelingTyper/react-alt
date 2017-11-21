import alt from '../alt'

class ResourceActions {
    constructor() {
        this.generateActions([
            'getResourcesSuccess',
            'getResourcesFail',
            'getResource'
        ]);
    }
}

export default alt.createActions(ResourceActions);