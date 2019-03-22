import React from 'react';
import './filtroEmprendedores.css'

function FiltroEmprendedores(props) {
    const filteredUsers = Object.values(props.data).filter(user => {
        return (user.ubicacion === props.loggedUser.ubicacion)
    })

    const mappedUsers = filteredUsers.map(item => {
        return (
            <div className="row container" key={item.nombreEmprendedor} onClick={() => props.onClick(item)}>
                <div className="col s3 ent-pic" style={{ backgroundImage: "url('" + item.fotoPerfil + "')" }}></div>
                <div className="col s9 ent-content">
                    <span className="ent-name">{item.nombreEmprendedor}</span>
                    <button className="rubro2">{item.rubro}</button>
                    <p>{item.ubicacion}</p>
                    <p>{item.infoEmprendimiento.slice(0, 50)} [...]</p>

                </div>

                <div className="col s12 center">
                    <div className="line"></div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="row container">
                <div className="col s12 emprendedores-region">Emprendedores en tu Región</div>
            </div>
            {mappedUsers}
        </div>
    )
}

export default FiltroEmprendedores;