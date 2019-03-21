import React from 'react';
import './profile.css';
import ProductsDisplay from './productsDisplay';
import phoneIcon from '../img/fab call button.png';

function Profile(props) { // en las props debería estar el perfil del usuario
    // {
    //     nombreEmprendedor: '',
    //     fotoPerfil: '',
    //     nombreEmprendimiento: '',
    //     ubicacion: '',
    //     contacto: {
    //         whatsapp: '+569123456789',
    //         mail: '',
    //     },
    //     rubro: '',
    //     intereses: ['', ''],
    //     ciclo: 0,
    //     infoEmprendimiento: '',
    //     productosOServicios: [{
    //         nombreProducto: '',
    //         foto: '',
    //         precio: '',
    //     }]
    // }




    return (
        <div>
            <div className="profile-container row">
                <div className="col s12 center container-imagen-emprendedor">
                    <img className="imagen-emprendedor responsive-img" src={props.perfil.fotoPerfil} alt="foto perfil"></img>
                    <div className="overlay col s12">
                        <p className="nombre-emprendedor">{` ${props.perfil.nombreEmprendedor} `}</p>
                        <p className="ubicacion">{props.perfil.ubicacion}</p>
                    </div>
                    <img className="call-icon" src={phoneIcon} alt="icon"></img>
                </div>
                <div className="col s12 sub-info-emprendedor center">
                    <div className="rubro"><p>{props.perfil.rubro}</p></div>
                    <div className="ciclo"><p>{`Ciclo ${props.perfil.ciclo}`}</p></div>
                </div>
                <div className="col s12">
                <p className="info-emprendimiento">{props.perfil.infoEmprendimiento}</p>
                </div>
                <div className="col s12 center">
                <div className="line"></div>
                </div>
            </div>
            <div className="products-container">
                <ProductsDisplay
                    productosOServicios={props.perfil.productosOServicios}
                />
            </div>
            <div className="row">
                <div className="col s12">

                </div>
            </div>

        </div>

    )
}


export default Profile;