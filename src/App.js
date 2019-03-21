import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import Header from './Header';
import LoginMientras from './components/loginMientrasTanto';
import { auth , ref } from './components/loginMientrasTanto';

const dsEY0qbeB7ZcHplh6hNOswbm4sh2 = {
  idEmprendedor: 123456789,
  nombreEmprendedor: 'Gatito Peludito',
  fotoPerfil: 'https://www.banigualdad.cl/wp-content/uploads/2018/01/luz-gacita.jpg',
  nombreEmprendimiento: 'Pelitos Peludos',
  ubicacion: 'Gatomacia',
  contacto: {
    whatsapp: '+569123456789',
    mail: false,
  },
  rubro: 'Lanas',
  ciclo: 7,
  cuota: {
    mes: 'Marzo',
    semanasPagadas: 3,
    semanasTotales: 4,
  },
  infoEmprendimiento: 'Vendemos pelitos suaves, trasquilados de ovejitas y alpacas felices.',
  productosOServicios: {
    0: {
      nombreProducto: 'Lana de Oveja Feliz',
      foto: 'https://http2.mlstatic.com/lana-de-oveja-100-natural-D_NQ_NP_1292-MCO19637728_4798-F.jpg',
      precio: 3990,
    },
    1: {
      nombreProducto: 'Lana de Alpaca Feliz',
      foto: 'https://cdn.shopify.com/s/files/1/0187/1694/products/lanaalpaca.jpg?v=1547819648',
      precio: 4990,
    },
    2: {
      nombreProducto: 'Lanas Arcoiris',
      foto: 'https://ar.all.biz/img/ar/catalog/117243.jpeg',
      precio: 4990,
    },
   3:  {
      nombreProducto: 'Lana Gradiente',
      foto: 'https://cdn.shopify.com/s/files/1/0890/8402/products/crescendo-gradient-yarn-black-rose_2048x.jpg?v=1548913597',
      precio: 4990,
    },
  }
}

class App extends Component {
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

  render() {
    return (
      <div>

        <Header />

        <div className="App">
          {!this.state.loggedUser && <LoginMientras
          getLoggedUser={this.getLoggedUser}
          />}

          {this.state.loggedUser && <Profile
            perfil={this.state.loggedUser}
          />}
        </div>
      </div>
    );
  }
}

export default App;
