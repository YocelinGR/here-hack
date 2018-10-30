import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginTelefono.css';

class LoginTelefono extends Component {
    render () {
        return (
        <div className="container">
            <div className= "container-fluid">
                <div className= "vertical-line"></div>
                <div className= "vertical-line-right"></div>
                <div className= "vertical-line-left"></div>
                <div className= "vertical-line-ligth"></div>
                <img className= "bus-img" src="https://github.com/YocelinGR/here-hack/blob/master/src/assets/bus.png?raw=true" alt="bus-icon" />
                <h1 className= "letter">School Security</h1>
            </div>
            <div className="row">
                <div className="row">
                    <p>Ingresa tu número telefónico</p>
                    <input id= "numero-padre" placeholder = ""></input>
                </div>
                <div className="row">
                <a href= "btn-acept" className= "btn-acept" id="acept-num">Aceptar</a>
                </div>
            </div>
        </div>
    );
    }
}

export default LoginTelefono;