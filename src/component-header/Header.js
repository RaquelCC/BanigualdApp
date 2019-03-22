import React from 'react';
import './header.css'

function Header(props) {

    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="#a" className="brand-logo left title">Banigualdapp</a>

                    <ul id="nav-mobile" className="right">
                        <li><a href="#a"><i className="material-icons right">search</i></a></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        {/* eslint-disable-next-line */}
                        <li className="tab"><a className="categories" value="store" onClick={props.onClick}>Tienda</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="tab"><a className="categories" value="entrepreneur" onClick={props.onClick}>Emprendedor</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="tab"><a className="categories" value="calendar" onClick={props.onClick}>Calendario</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="tab"><a className="categories" value="myProfile" onClick={props.onClick}>Mi Perfil</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;