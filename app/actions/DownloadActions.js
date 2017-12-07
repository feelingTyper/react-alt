import alt from '../alt';

class DownloadActions {
    constructor() {
        this.generateActions(
            'downloadSuccess',
            'downloadFail',
            'getDefaultMessgae'
        );
    }


    download(name) {

        function downloadFileByForm(name) {
            console.log("ajaxDownloadSynchronized");
            console.log(name);
            var url = "/api/download";
            var form = $("<form></form>").attr("action", url).attr("method", "post");
            form.append($("<input></input>")
                .attr("type", "hidden").attr("name", "id").attr("value", name));
            form.appendTo('body').submit().remove();
        }

        downloadFileByForm(name);
    }
}

export default alt.createActions(DownloadActions);