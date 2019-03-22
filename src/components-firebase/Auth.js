import React, { Component } from 'react';

import fire  from './Fire';
import Login from './Login';

import './css/login.css';

class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user){
        this.props.getLoggedUser();
        this.setState({ user });
        localStorage.removeItem('user');
      } else {
        this.setState({ user: null});
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="Auth">
        {/* {this.state.user ? (<Home />) : (<Login />)}         */}
        <Login />
      </div>
    );
  }
}

export default Auth;