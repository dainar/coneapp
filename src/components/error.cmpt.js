import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Error404 extends Component {

    render() {
        return (
            <div>
            <div className='error'>
                <h1>Error 404</h1>
                <h2>Oops! No pudimos encontrar la pagina.</h2>
                
                       
                        
                </div>
                <p className="error">Parece que no hay ningun recurso que apunte a la direccion que escribiste. </p>
                <span className="error">Regresa al </span><Link className="error" to="/login">Inicio</Link> 
            </div>
        );
    }
}

