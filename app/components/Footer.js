import React from 'react';
import {
  Link
} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    // FooterActions.getTopCharacters();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <footer>
        <div className='container'>
          
          <div className='row clearfix'>
            <div className="row clearfix">
              <div className='col-sm-12'>
                <h3 className='lead'><strong>智能化网络信息安全实验平台</strong></h3>
                <p>联系地址:&nbsp;&nbsp;&nbsp;北京市海淀区上元村3号院北京交通大学&nbsp;&nbsp;&nbsp;九教北304</p>
                <p>联系电话:&nbsp;&nbsp;&nbsp;51684609</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className='col-sm-12' style={{paddingTop: '50px'}}>
                <p>&copy;2017-BJTU</p>
              </div>
            </div>
          
          </div>
         
        </div>
      </footer>
    );
  }
}

export default Footer;