import React from 'react';
import {
  Link,
  IndexLink
} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getCharacterCount();

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    let form = `
      <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
            <div className='input-group'>
              <input type='text' className='form-control' placeholder={this.state.totalCharacters + ' characters'} value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} />
              <span className='input-group-btn'>
                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
            </div>
          </form>`;

    return (
      <nav className='navbar navbar-default navbar-static-top'>
        
        <div id='navbar' className='navbar-collapse collapse'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className='navbar-brand'>
              <span className={'triangles animated ' + this.state.ajaxAnimationClass}>
                <div className='tri invert'></div>
                <div className='tri invert'></div>
                <div className='tri'></div>
                <div className='tri invert'></div>
                <div className='tri invert'></div>
                <div className='tri'></div>
                <div className='tri invert'></div>
                <div className='tri'></div>
                <div className='tri invert'></div>
              </span>
              <span style={{fontSize: '32px', marginLeft: '70px', marginRight: '5px'}}>Information&nbsp;&nbsp;<font style={{color: '#788994'}}>Security</font></span>
              <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
            </Link>
          </div>
          
          <ul className='nav navbar-nav nav-right'>
            <li><IndexLink to='/'>首页</IndexLink></li>
            <li><Link to='/services'>服务</Link></li>
            <li><Link to='/resources'>资源</Link></li>
            <li><Link to='/projects'>项目</Link></li>
            <li><Link to='/team'>团队</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;