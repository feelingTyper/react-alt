import alt from '../alt';
import TeamActions from '../actions/TeamActions';

class TeamStore {
    constructor() {
        this.bindActions(TeamActions);
    }

    onGetDefaultMessage() {

    }

}

export default alt.createStore(TeamStore);