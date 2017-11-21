import alt from '../alt';

class HomePageActions {
    constructor() {
        this.generateActions(
            'getDefaultMessage'
        );
    }

}

export default alt.createActions(HomePageActions);