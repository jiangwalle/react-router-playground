import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedin: false
    }

    this.login = this.login.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  onFormChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  login() {
    localStorage.setItem('user', this.state);
    this.setState({'isLoggedin': true});
  }

  logout() {
    localStorage.removeItem('user');
    this.setState({'isLoggedin': false});
  }

  componentDidMount() {
    if (localStorage.getItem('user') !== null ) {
      this.setState({'isLoggedin': true});
    }
  }

  render() {
    return (
      <div className='container center'>
        <h4>登录页面</h4>
        {
          this.state.isLoggedin
          ? <button onClick={this.logout}>退出</button> 
          : <form>
              <div>
                <input name='username' onChange={this.onFormChange} placeholder='用户名'></input>
              </div>
              <div>
                <input name='password' onChange={this.onFormChange} type='password' placeholder='密码'></input>
              </div>
              <button onClick={this.login}>登录</button>
            </form>
        }
        
      </div>
    )
  }
}
