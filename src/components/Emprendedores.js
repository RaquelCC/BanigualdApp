import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Emprendedores.css'
import fire from '../config/Fire.js';

class Emprendedores extends Component {
    constructor () {
        super()
        this.state = { 
            Nombre_Emprendedor: ""
         }
            

        this.database = fire.database().ref().child('0').child('Nombre_Emprendedor')

      }

        componentDidMount(){ 
        this.database.on('value', snap =>{
            this.setState({
                Nombre_Emprendedor: snap.val()
            })
        })
      }

    render() {
        return (
          
    <div className="card-action">
        <a href="top"> 

            <div className="col s12 m7">
            
                <div className="header">Emprendedores de tu zona</div>

                {/* /INICIO CARD/ */}
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://www.banigualdad.cl/wp-content/uploads/2018/06/alice-peailillo.jpg" alt="" className='circle responsive-img'/>
                    </div>
                        <div className="card-stacked">
                             <div className="card-content">
                                <div className='nombre-emprendedores'></div> 
                                <div className="row">
                                    <div className='col s8 nombre-emprendedores'>Alice Peñailillo</div>
                                    {/* <div className='col s6 nombre-emprendedores'>{this.state.Nombre_Emprendedor}</div> */}
                                    <div className="col offset-s4 descripcion-categoria">Cosmética</div>
                                </div>
                                <div className='ciudad-emprendedor'>San Antonio</div> {this.state.prueba}
                                <div className='descripcion-emprendedores'><p>Vendo marcas no testeadas en animales, Productos sanos...</p></div>
                            </div>
                        </div>
                </div>
                {/* /FIN CARD/ */}

                {/* /INICIO CARD/ */}
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://www.banigualdad.cl/wp-content/uploads/bfi_thumb/solange-cspedes-nzgiollbnsvnc7ru6gnmww0ubugl3iagb9dipjwkdo.jpg" alt="" className='circle responsive-img'/>
                    </div>
                        <div className="card-stacked">
                             <div className="card-content">
                                <div className='nombre-emprendedores'></div> 
                                <div className="row">
                                    <div className='col s8 nombre-emprendedores'>Solange Céspedes</div>
                                    <div className="col offset-s4 descripcion-categoria">Artesanias</div>
                                </div>
                                <div className='ciudad-emprendedor'>Pomaire</div> {this.state.prueba}
                                <div className='descripcion-emprendedores'><p>Productos de la zona, todo hecho a mano con la mejor greda de Chile...</p></div>
                            </div>
                        </div>
                </div>
                {/* /FIN CARD/ */} 

                   {/* /INICIO CARD/ */}
                   <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://www.banigualdad.cl/wp-content/uploads/2018/01/luz-gacita.jpg" alt="" className='circle responsive-img'/>
                    </div>
                        <div className="card-stacked">
                             <div className="card-content">
                                <div className='nombre-emprendedores'></div> 
                                <div className="row">
                                    <div className='col s8 nombre-emprendedores'>Luz Gacitúa</div>
                                    <div className="col offset-s4 descripcion-categoria">Vestuario</div>
                                </div>
                                <div className='ciudad-emprendedor'>Maipú</div> {this.state.prueba}
                                <div className='descripcion-emprendedores'><p>Nos dedicamos a fabricar trajes de huaso, es un emprendimiento familiar...</p></div>
                            </div>
                        </div>
                </div>
                {/* /FIN CARD/ */}

                   {/* /INICIO CARD/ */}
                   <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://www.banigualdad.cl/wp-content/uploads/2017/07/guadalupe-1-1024x681.jpg" alt="" className='circle responsive-img'/>
                    </div>
                        <div className="card-stacked">
                             <div className="card-content">
                                <div className='nombre-emprendedores'></div> 
                                <div className="row">
                                    <div className='col s8 nombre-emprendedores'>Guadalupe Díaz</div>
                                    <div className="col offset-s4 descripcion-categoria">Alimentos</div>
                                </div>
                                <div className='ciudad-emprendedor'>Pudahuel</div> {this.state.prueba}
                                <div className='descripcion-emprendedores'><p>Solo productos 100% veganos, todo muy rico y sano... </p></div>
                            </div>
                        </div>
                </div>
                {/* /FIN CARD/ */}

                   {/* /INICIO CARD/ */}
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://www.banigualdad.cl/wp-content/uploads/2018/03/marianela-crdova.jpg" alt="" className='circle responsive-img'/>
                    </div>
                        <div className="card-stacked">
                             <div className="card-content">
                                <div className='nombre-emprendedores'></div> 
                                <div className="row">
                                    <div className='col s8 nombre-emprendedores'>Marianela Córdova</div>
                                    <div className="col offset-s4 descripcion-categoria">Salud</div>
                                </div>
                                <div className='ciudad-emprendedor'>Recoleta</div> {this.state.prueba}
                                <div className='descripcion-emprendedores'><p>En familia fabricamos muchos productos naturales,todo natural... </p></div>
                            </div>
                        </div>
                </div>
                {/* /FIN CARD/ */}

                   {/* /INICIO CARD/ */}
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6" alt="" className='circle responsive-img'/>
                    </div>
                        <div className="card-stacked">
                             <div className="card-content">
                                <div className='nombre-emprendedores'></div> 
                                <div className="row">
                                    <div className='col s8 nombre-emprendedores'>{this.state.Nombre_Emprendedor}</div>
                                    <div className="col offset-s4 descripcion-categoria">Cosmética</div>
                                </div>
                                <div className='ciudad-emprendedor'>Las Condes</div> {this.state.prueba}
                                <div className='descripcion-emprendedores'><p>Vende marcas no testeadas en animales...</p></div>
                            </div>
                        </div>
                </div>
                {/* /FIN CARD/ */}

                                    

            </div>
        
        </a>
    </div>


        );
    }
}

export default Emprendedores;