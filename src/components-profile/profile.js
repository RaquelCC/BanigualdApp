import React from 'react';
import './profile.css';
// import ProductsDisplay from './productsDisplay';
import phoneIcon from '../img/fab call button.png';
import Card from '../components-store/Card';

function Profile(props) { 
    const cards = props.perfil.productosOServicios.map(item => {
        return (
            <Card
            item={item}
            />
        )
    })

    return (
        <div>
            <div className="profile-container row">
                <div className="col s12 center container-imagen-emprendedor" style={{backgroundImage: "url('"+props.perfil.fotoPerfil+"')"}}>
                    <div className="overlay col s12">
                        <p className="nombre-emprendedor">{` ${props.perfil.nombreEmprendedor} `}</p>
                        <p className="ubicacion">{props.perfil.ubicacion}</p>
                    </div>
                    <a href={`tel:${props.perfil.contacto.whatsapp}`} ><img className="call-icon" src={phoneIcon} alt="icon"></img></a>
                </div>
                <div className="col s12 sub-info-emprendedor center">
                    <div className="rubro3"><p>{props.perfil.rubro}</p></div>
                    <div className="ciclo3"><p>{`Ciclo ${props.perfil.ciclo}`}</p></div>
                </div>
                <div className="col s12">
                    <p className="info-emprendimiento">{props.perfil.infoEmprendimiento}</p>
                </div>
                <div className="col s12 center">
                    <div className="line"></div>
                </div>
                <div className="col s12 publicaciones">
                    <p>Publicaciones</p>
                </div>
            </div>
            <div className="products-container">

                {cards}
            </div>
            <div className="row">
                <div className="col s12">

                </div>
            </div>

        </div>

    )
}


export default Profile;