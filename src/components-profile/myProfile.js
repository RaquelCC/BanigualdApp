import React from 'react';
import './myProfile.css';
// import ProductsDisplay from './productsDisplay';
import Card from '../components-store/Card';

function MyProfile(props) {
    const cards = props.perfil.productosOServicios.map(item => {
        return (
            <Card
            item={item}
            onClick={props.onClick}
            />
        )
    })

    return (
        <div>
            <div className="profile-container row">
                <div className="col s12 center container-imagen-emprendedor" style={{ backgroundImage: "url('" + props.perfil.fotoPerfil + "')" }}>
                    <div className="overlay col s12">
                        <p className="nombre-emprendedor">{` ${props.perfil.nombreEmprendedor} `}</p>
                        <p className="ubicacion">{props.perfil.ubicacion}</p>
                    </div>

                    <div className="rubro"><p>{props.perfil.rubro}</p></div>
                </div>
                <div className="col s12 sub-info-emprendedor center">
                    <p className="info-ciclo">Información de tu ciclo de pago</p>
                </div>
                <div className="col s12">
                    <div className="ciclo"><p>{`Ciclo ${props.perfil.ciclo}`}</p></div>
                </div>
                <div className="col s12">
                    <tr>
                        <td className="table-left">Cuota semanal</td>
                        <td className="table-right greenB">{props.perfil.cuota.cuotaSemanal}</td>
                    </tr>
                    <tr>
                        <td className="table-left">Cuotas pagadas</td>
                        <td className="table-right"><span className="greenB">{props.perfil.cuota.cuotasPagadas}</span>/21</td>
                    </tr>
                    <tr>
                        <td className="table-left">Monto pagado</td>
                        <td className="table-right">{props.perfil.cuota.montoPagado}</td>
                    </tr>
                    <tr>
                        <td className="table-left">Monto total</td>
                        <td className="table-right">{props.perfil.cuota.montoTotal}</td>
                    </tr>
                    <tr>
                        <td className="table-left">Monto restante</td>
                        <td className="table-right greenB">{props.perfil.cuota.montoRestante}</td>
                    </tr>
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


export default MyProfile;