import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import './VistaPerfiles.css';

class VistaPerfiles extends Component {
    render () {
        return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <a className= "btn-prpfile" id="conductor"><Link to='/VistaConductor'>Conductor</Link></a>
                </div>
                <div className="row">
                <a className= "btn-prpfile" id="acompañante"><Link to='/VistaAcompañante'>Acompañante</Link></a>
                </div>
                <div className="row">
                <a className= "btn-prpfile" id="padre"><Link to='/VistaPadre'>Padre</Link></a>
                </div>
                <div className="row">
                <a className= "btn-prpfile" id="escuela"><Link to='/VistaEscuela'>Escuela</Link></a>
                </div>
                <div className="row">
                <a className= "btn-prpfile" id="administrador"><Link to='/VistaAdmin'>Padre</Link></a>
                </div>
            </div>
        </div>
    );
    }
}

export default VistaPerfiles;