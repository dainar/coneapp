import React from 'react';
import {browserHistory } from 'react-router';
import Header from './header.cmpt';

import {  connect } from 'react-redux';


const mapState = (state) => {
    return {};
}

const mapDispatch = (dispatch) => {
    return {};
}

class Recursos extends React.Component {
    constructor() {
        super();
        this.state = {
           
        };
    }

    componentDidMount = () => {
if(localStorage.token){
                

            }else{
               
                browserHistory.push('/login');
            }
   

    }

    render() {
        return (
            <div className="admin">
                <Header />
            {
            <div>Hola
                </div>
                
                } 
                
            </div>
              )
             }
}


export default connect(mapState, mapDispatch)(Recursos);