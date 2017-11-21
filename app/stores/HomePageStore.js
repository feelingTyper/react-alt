import alt from '../alt';
import HomePageActions from '../actions/HomePageActions';

class HomePageStore {
    constructor() {
        this.bindActions(HomePageActions);
        this.message = '';
    }

    onGetDefaultMessage() {
        this.message = 'cnmd';
    }
}

export default alt.createStore(HomePageStore);