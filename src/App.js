import React, { Component } from 'react';
import './App.css';
import Auth from './components-firebase/Auth';

import 'materialize-css/dist/css/materialize.min.css';
import Entrepreneur from './components-entrepreneur/Emprendedores'

class App extends Component {
  
 

  render() {
    return (
      <div className="App"> 
        <Auth  />  
        <Entrepreneur/>   
      </div>
    );
  }
}

export default App;
