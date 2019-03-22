import React, { Component } from 'react';
import './App.css';
import Auth from './components-firebase/Auth';
import fire, { dB } from './components-firebase/Fire';
import Profile from './components-profile/profile';
import Header from './component-header/Header'
import MyProfile from './components-profile/myProfile';
import FiltroEmprendedores from './components-entrepreneur/filtroEmprendedores';
import Calendar from './component-calendar/calendar';
import Store from './components-store/store'
import TinderStore from './components-store/tinderStore';
// import Entrepreneur from './components-entrepreneur/Emprendedores';
// import Profile from './components-profile/profile';

// import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedUser: null,
      activeMenu: 'store',
      showProfile: null,
      data: null,
      calendar: null,
      showItem: null,
    }

    this.getLoggedUser = this.getLoggedUser.bind(this);
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.handleClickEmprendedores = this.handleClickEmprendedores.bind(this);
    this.handleClickStore = this.handleClickStore.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    dB.ref().once('value', snap => {
      this.setState({
        ...this.state,
        data: snap.val().users,
        calendar: snap.val().calendar,
      })
    })
  }


  getLoggedUser() {

    dB.ref('users/' + fire.auth().currentUser.uid).once('value', snap => {
      this.setState({
        ...this.state,
        loggedUser: snap.val(),
      })
    })

  }

  handleMenuChange(e) {
    this.setState({
      ...this.state,
      activeMenu: e.target.getAttribute('value'),
      showProfile: null,
      showItem: null,
    })
  }

  handleClickEmprendedores(item) {
    this.setState({
      ...this.state,
      showProfile: item,
      activeMenu: null,
    })

  }

  handleClickStore(item) {
    this.setState({
      ...this.state,
      showItem: item,
      showProfile: null,
      activeMenu: 'store',
    })
  }

  logout() {
    fire.auth().signOut().then(()=> {
      this.setState({
        ...this.state,
        loggedUser: null,
      })
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
  }


  render() {

    return (
      <div className="App">
        {this.state.loggedUser &&
          <Header
            onClick={this.handleMenuChange}
            logout={this.logout}
          />
        }
        {!this.state.loggedUser &&
          <Auth
            getLoggedUser={this.getLoggedUser}
          />}
        {(this.state.loggedUser && this.state.activeMenu === 'myProfile') &&
          <MyProfile
            perfil={this.state.loggedUser}
            onClick={this.handleClickStore}
          />
        }
        {(this.state.loggedUser && this.state.activeMenu === 'entrepreneur') &&
          <FiltroEmprendedores
            data={this.state.data}
            loggedUser={this.state.loggedUser}
            onClick={this.handleClickEmprendedores}
          />
        }
        {(this.state.loggedUser && this.state.showProfile) &&
          <Profile
            perfil={this.state.showProfile}
            onClick={this.handleClickStore}
          />
        }
        {(this.state.loggedUser && this.state.activeMenu === 'calendar') &&
          <Calendar
            calendar={this.state.calendar}
          />
        }
        {(this.state.loggedUser && (this.state.activeMenu === 'store' && !this.state.showItem)) &&
          <Store
            data={this.state.data}
            onClick={this.handleClickStore}
            loggedUser={this.state.loggedUser}
          />
        }
        {(this.state.loggedUser && this.state.showItem) && 
        <TinderStore
          item={this.state.showItem}

        />
        }
      </div>
    );
  }
}

export default App;
