import React from 'react';
import './header.css'

function Header (props) {
    
        return (
            <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="#a" className="brand-logo left title">Baniguald<span className="app">app</span></a>
                   
                    <ul id="nav-mobile" className="right">
                        <li><a href="#a"><i className="material-icons right">search</i></a></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a className="categories" href="#test1">Tienda</a></li>
                        <li className="tab"><a className="categories active" href="#test2">Emprendedor</a></li>
                        <li className="tab"><a className="categories" href="#test3">Calendario</a></li>
                        <li className="tab"><a className="categories" href="#test4">Mi Perfil</a></li>
                    </ul>
                </div>
            </nav>
            </div>
        ) 
}

export default Header;