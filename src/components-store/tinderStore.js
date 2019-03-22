import React from 'react';
import './tinderStore.css'


function TinderStore(props) {

    return (
        <div>
            <div className="details">
                <p className="title">{props.item.nombreProducto}</p>
                <p className="value">${props.item.precio}</p>
            </div>
            <div className="carousel carousel-slider center">
                <div className="carousel-fixed-item center">
                    <a href={`tel:${props.item.whatsapp}`} className="btn-floating btn-large waves-effect"><i className="material-icons">phone</i></a>
                </div>
                <div>
                    <img className="picture-prod" src={props.item.foto} alt={props.item.nombreProducto} />
                </div>
                <div>
                    {/* eslint-disable-next-line */}
                    <a className="flecha1"><i className="material-icons left">arrow_back</i></a>
                    {/* eslint-disable-next-line */}
                    <a className="flecha2"><i className="material-icons right">arrow_forward</i></a>
                </div>
            </div>

            <div className="center">
                <p>{props.item.whatsapp}</p>
                <p>{props.item.ubicacion}</p>
                <p className="name">{props.item.nombreEmprendedor}</p>
            </div>
        </div>


    )
}

export default TinderStore;