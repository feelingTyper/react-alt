import alt from '../alt';
import ResourceMoreActions from '../actions/ResourceMoreActions';

class ResourceMoreStore {
    constructor() {
        this.bindActions(ResourceMoreActions);
        this.nameValidationState = '';
        this.genderValidationState = '';
    }

}

export default alt.createStore(ResourceMoreStore);