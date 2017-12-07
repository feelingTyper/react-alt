import React from 'react';
import DownloadActions from '../actions/DownloadActions';

class Download extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = DownloadActions.getDefaultMessgae();
    }

    componentDidMount() {
        let id = this.props.params.id;
        console.log(id);
        DownloadActions.download(id);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (<div className="error"></div>)
    }
}

export default Download;