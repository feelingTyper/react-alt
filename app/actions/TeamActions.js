import alt from '../alt';

class TeamActions {
    constructor() {
        this.generateActions(
            'getDefaultMessage'
        );
    }
}

export default alt.createActions(TeamActions);