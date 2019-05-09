import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { registerSesion } from '../actions/login.act';
import { Link } from 'react-router';


const mapState = (state) => {
    return {};
}

const mapDispatch = (dispatch) => {
    return {
        RegisterSesion: (correo, password, callback) => {
            registerSesion(correo, password, callback);
        }
    };
}

class Register extends React.Component {
        constructor() {
            super();
            this.state = {
                correo: "",
                password: "",   
                error: ""
            };
            this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount= () => {
            if (localStorage.token) {
                browserHistory.push('/');
            }

        }

        handleChange(e) {
            const {
                name,
                value
            } = e.target;
            this.setState({
                [name]: value
            });
        }

        login = () => {
            this.setState({
                error: ""
            });
            var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
            if (this.state.correo == "") {
                this.setState({
                    error: "Debes de introducir un correo"
                });
                return false;
            } else if (this.state.password == "") {
                this.setState({
                    error: "Debes de introducir una contraseña"
                });
                return false;
            } else if (!pattern.test(this.state.correo)) {
                this.setState({
                    error: "Ingresa un formato valido de correo"
                });
                return false;
            }


            this.setState({
             
            }, function () {

                this.props.RegisterSesion(this.state.correo, this.state.password, function (sesion) {
                    if (sesion.error) {
                       
                    } else {
                        
                        browserHistory.push('/login');
                    }
                }.bind(this));
            });
        }



        render() {
            return ( <div> 
                {!this.state.loader &&
                    <div className = "container login" >
                       <div className = "login-card" >
                       <h4>Regustrate</h4>
                           <input type="text" name="correo"  onKeyPress={this.handleKeyPress} value={this.props.correo} onChange={this.handleChange} placeholder="Correo"/> 
                           <input type="password" name="password" onKeyPress={this.handleKeyPress} value={this.props.password} onChange={this.handleChange} placeholder="password"/> 
                            <div className="centr"> 
                            {this.state.error} 
                            </div>
                            <div className = "centr"> 
                            <span> Ya tienes cuenta?</span> <Link to="/login">Ingresa</Link>
                             
                            </div> <br/>
                             <button onClick={this.login} className="btn"> Resgistro </button>
                        </div>
                    </div> 
                        
                    } 
                    
                    </div>
                )
            }
        }

        export default connect(mapState, mapDispatch)(Register);