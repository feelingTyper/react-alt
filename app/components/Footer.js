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

    //回到顶点功能
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $(".top").fadeIn(800);
        } else {
          $(".top").fadeOut(800);
        }
      });

      $(".top").click(function() {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
    });


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
              <div className="col-xs-6" style={{lineHeight:'110px', paddingLeft: '50px'}}>
                <img src="/img/footer_logo.png" alt=""/>
              </div>
              <div className='col-xs-6'>
                <h2 className='lead'><strong>智能化网络信息安全实验平台</strong></h2>
              </div>
            </div>

            <div className="divider"></div>

            <div className="row clearfix">
              <div className="col-xs-6" style={{paddingTop: '30px'}}>
                <p>联系地址:&nbsp;&nbsp;&nbsp;北京市海淀区上园村3号院北京交通大学&nbsp;&nbsp;&nbsp;九教北304</p>
                <p>联系电话:&nbsp;&nbsp;&nbsp;51684609</p>
              </div>
              <div className='col-xs-6' style={{paddingTop: '30px', paddingBottom: '30px', textAlign:'center'}}>
                <p >&copy;2017&nbsp;&nbsp;&nbsp;北京交通大学轨道交通隐私保护北京市重点实验室版权所有</p>
                <p>京公网安备：&nbsp;&nbsp;110402430059 京ICP备12010520号-2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="top">
          回到顶部
        </div>
      </footer>
    );
  }
}

export default Footer;