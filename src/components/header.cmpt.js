import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import $ from 'jquery';


const mapState = (state) => {
    return {};
}

const mapDispatch = (dispatch) => {
    return {};
}

class Header extends React.Component {
     constructor(){
        super();
        this.state={
            avatar:"",
            first:"", 
            last:""
            
        };
    }
    
     componentDidMount = () => {
        
        if(localStorage.token){
                

        }else{
           
            browserHistory.push('/login');
        }



        $.ajax({
            url: "https://reqres.in/api/users/1",
            method: "GET",
            dataType: "JSON",
           
            success: (response) => {
            this.setState({avatar: response.data.avatar, first:response.data.first_name, last:response.data.last_name });
            },
            error: (jqXHR,exception) => {
              console.log(exception)

            }
        }); }

    logout = (e)=>{
        localStorage.token = "";
        browserHistory.push('/login');
    }
    

    render() {

        return (
           <div className="main-header">
           
               
                {
                    <div>
                     <img alt="logo" className="logo" src={this.state.avatar} />
                     <p>{this.state.first} {this.state.last}</p>
                 <div>
                <Link to={process.env.PUBLIC_URL + '/users'} className="head-item">
                    <p>Usuarios</p>
                    <div className="icon-env">
                        
                    </div>
                </Link>
                <Link to="/recursos" className="head-item">
                    <p>Recursos</p>
                    <div className="icon-env">
                        
                    </div>
                </Link>
                <div onClick={(e)=>{ this.logout(e) }} className="head-item">
                    <p>Salir</p>
                    <div className="icon-env">
                       
                    </div>
                </div>
                 </div>
                 </div>
                }
                
            </div>
        )
    }
}
 

export default connect(mapState, mapDispatch)(Header);
