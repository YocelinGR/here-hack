import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VistaPerfiles.css';

class VistaPerfiles extends Component {
    render () {
        return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <a href= "btns" className= "btn-perfil" id="conductor"><Link to='/VistaConductor'>Conductor</Link></a>
                </div>
                <div className="row">
                <a href= "btns" className= "btn-perfil" id="acompañante"><Link to='/VistaAcompañante'>Acompañante</Link></a>
                </div>
                <div className="row">
                <a href= "btns" className= "btn-perfil" id="padre"><Link to='/VistaPadre'>Padre</Link></a>
                </div>
                <div className="row">
                <a href= "btns" className= "btn-perfil" id="escuela"><Link to='/VistaEscuela'>Escuela</Link></a>
                </div>
                <div className="row">
                <a href= "btns" className= "btn-prperfilpfile" id="administrador"><Link to='/VistaAdmin'>Padre</Link></a>
                </div>
            </div>
        </div>
    );
    }
}

export default VistaPerfiles;