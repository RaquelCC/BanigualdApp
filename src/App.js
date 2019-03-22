import React, { Component } from 'react';
import './App.css';
import Auth from './components-firebase/Auth';
/*
import Entrepreneur from './components-entrepreneur/Emprendedores';
import Profile from './components-profile/profile';
*/
// import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  /*
  constructor(props){
    super(props);
    this.state = {
      loggedUser: null,
    }
 
    this.getLoggedUser = this.getLoggedUser.bind(this);
  }
 
  getLoggedUser() {
    auth.onAuthStateChanged(user => {
      if (user.uid === 'dsEY0qbeB7ZcHplh6hNOswbm4sh2') {
        ref.update(dsEY0qbeB7ZcHplh6hNOswbm4sh2)
      }
      ref.once('value', snap=> {
        this.setState({
          ...this.state,
          loggedUser: snap.val(),
        })
      })
 
    })
  }
 */
  render() {

    return (
      <div className="App"> 
        <Auth  />  
      </div>
    );
  }
}

export default App;
