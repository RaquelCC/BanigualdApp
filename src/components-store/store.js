import React, { Component } from 'react';
import './store.css'
// import {orderRef} from './firebase';

class Store extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         data:null
    //     }
    // }
    // componentDidMount() {
    //     orderRef.once("value", snapshot => {
    //         this.setState({
    //             ...this.state,
    //             data: snapshot.val()
    //         })
    //     })
    // }

    render() {

        let gg = [];
        if (this.props.data) {

            const users = [];
            Object.keys(this.props.data).forEach(item => {
                users.push(this.props.data[item])
            })
            const products = [];
            users.forEach(user => {
                if (user.productosOServicios) {
                    for (let item in user.productosOServicios) {
                        products.push(user.productosOServicios[item])
                    }
                }
            })

            const products2 = products.filter(item => {
                return (item.ubicacion === this.props.loggedUser.ubicacion)
            })

            const objectMap = products2.map(item => {
                return (
                    <div className="container" onClick={() => this.props.onClick(item)}>
                        <div className="row">
                            <div className="col s12 m6">
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img className="img-prod" src={item.foto} alt={item.nombreProducto} />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <div className="tag-contain">
                                                <div className="rubro3">{item.rubro}</div>
                                            </div>
                                            <p className="description">{item.nombreProducto}</p>
                                            <p className="price">$ {item.precio}</p>
                                        </div>
                                        <div className="card-action">
                                            {/* eslint-disable-next-line */}
                                            <a className="place" href="#">{item.ubicacion}</a>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                )
            })
            gg = objectMap




        }

        return (
            <div>

                <div className="row container">
                    <div className="col s12 emprendedores-region">Productos y Servicios en tu Región</div>
                </div>
                {gg}
            </div>
        );

    }
}

export default Store;