import React, { Component } from 'react';
import './App.css';
import Auth from './components-firebase/Auth';

import 'materialize-css/dist/css/materialize.min.css';
import Emprendedores from './components/Emprendedores'

class App extends Component {
  
 

  render() {
    return (
      <div className="App"> 
        <Auth  />  
        <Emprendedores/>   
      </div>
    );
  }
}

export default App;
