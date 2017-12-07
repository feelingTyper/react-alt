import alt from '../alt';
import DownloadActions from '../actions/DownloadActions';

class DownloadStore {
    constructor() {
        this.bindActions(DownloadActions);
        this.name = '';
        this.message = 'downloading';
        this.errormsg = '';
    }

    onDownloadSuccess(successMessage) {

    }

    onGetDefaultMessgae() {
        this.messgae = 'downloading';
    }

    onDownloadFail(jqxhr) {
        this.errormsg = jqxhr;
    }

}

export default alt.createStore(DownloadStore);