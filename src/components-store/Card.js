import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img className="img-prod" src={props.item.foto} alt="liloystich" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <div className="tag-contain">
                                    <button className="btn-small btn-categories">{props.item.rubro}</button>
                                </div>
                                <p className="description">{props.item.nombreProducto}</p>
                                <p className="price">{props.item.precio}</p>
                            </div>
                            <div className="card-action">
                             {/* eslint-disable-next-line */}
                                <a className="place" href="#">{props.item.ubicacion}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;
