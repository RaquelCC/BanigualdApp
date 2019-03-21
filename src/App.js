import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import Header from './Header';

const emprendedorPromedio = {
  nombreEmprendedor: 'Pandita Snorlax',
  fotoPerfil: 'https://media.karousell.com/media/photos/products/2017/09/06/banpresto_crane_game_pokemon_sun_and_moon_kororin_friends_big_snorlax__small_psyduck__slowpoke__munc_1504685248_126a52d10',
  nombreEmprendimiento: 'Pelitos Peludos',
  ubicacion: 'Gatomacia',
  contacto: {
    whatsapp: '+569123456789',
    mail: '',
  },
  rubro: 'Lanas',
  intereses: ['', ''],
  ciclo: 7,
  infoEmprendimiento: 'Vendemos pelitos suaves, trasquilados de ovejitas y alpacas felices.',
  productosOServicios: [
    {
      nombreProducto: 'Lana de Oveja Feliz',
      foto: 'https://http2.mlstatic.com/lana-de-oveja-100-natural-D_NQ_NP_1292-MCO19637728_4798-F.jpg',
      precio: 3990,
    },
    {
      nombreProducto: 'Lana de Alpaca Feliz',
      foto: 'https://cdn.shopify.com/s/files/1/0187/1694/products/lanaalpaca.jpg?v=1547819648',
      precio: 4990,
    },
    {
      nombreProducto: 'Lanas Arcoiris',
      foto: 'https://ar.all.biz/img/ar/catalog/117243.jpeg',
      precio: 4990,
    },
    {
      nombreProducto: 'Lana Gradiente',
      foto: 'https://cdn.shopify.com/s/files/1/0890/8402/products/crescendo-gradient-yarn-black-rose_2048x.jpg?v=1548913597',
      precio: 4990,
    },
  ]
}

class App extends Component {
  render() {
    return (
      <div>

        <Header />

        <div className="App">
          <Profile
            perfil={emprendedorPromedio}
          />
        </div>
      </div>
    );
  }
}

export default App;
