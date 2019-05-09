import React from 'react'
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import { connect } from 'react-redux';
import { newUsers } from '../actions/admin.act';


const mapState = (state) => {
  return {};
}

const mapDispatch = (dispatch) => {
  return {
    getUsers: (page, callback) => {
      newUsers(page, callback);
  }
  };
}


class UserTable extends React.Component {
  constructor(){
      super();
      this.state={
    userss:{},
    pageCount:0,
    usuario:{}
      }
 
}
componentDidMount= () =>{
 
        $.ajax({
            url: "https://reqres.in/api/users?page=1",
            method: "GET",
            dataType: "JSON",
            
            success: (response) => {
                this.setState({userss:response.data, pageCount:response.total_pages})
            },
            error: (jqXHR,exception) => {
               console.log(exception)
            }
        });

}

handlePageClick = (data) => {
  let offset = data.selected + 1;
   this.props.getUsers(offset, (response)=>{this.setState({userss:response.data})})
}

componentDidUpdate= (prevProps)=>{
  if (this.props.users != prevProps.users) {
    
  
  console.log(this.props.users);
  console.log(prevProps.users)
    const usersss = window.localStorage.getItem('myData');
    
      const myObj= JSON.parse(usersss);
      console.log(this.state.userss);
      console.log(myObj);
       this.setState({userss:this.props.users})
    
      
    
    }}

    openModal = (usuario) => {
      this.setState({usuario:usuario});
    	var menu = document.getElementById('modal');
        if(menu.classList.contains('open')){
            menu.classList.remove('open');
        } else{
        	menu.classList.add('open');
        };
    }

render(){
    
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Avatar</th>
          <th>Aciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.userss.length > 0 ? (
          this.state.userss.map(user => (
            <tr key={user.id} >
              <td onClick={()=>{this.openModal(user)}}>{user.first_name}</td>
              <td onClick={()=>{this.openModal(user)}}>{user.last_name}</td>
              <td onClick={()=>{this.openModal(user)}}>{user.email}</td>
              <td onClick={()=>{this.openModal(user)}}><img alt="avatar" src={user.avatar}/></td>
              <td>
                <button
                  onClick={() => {
                    this.props.editRow(user)
                  }}
                  className="button muted-button"
                >
                  Editar
                </button>
                <button
                  onClick={() => this.props.deleteUser(user.id)}
                  className="button muted-button"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No hay usuarios</td>
          </tr>
        )}
      </tbody>
    </table>
    <div className="paginador">
    <ReactPaginate pageCount={this.state.pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        previousLabel={"anterior"}
        nextLabel={"siguiente"}
        breakLabel={<a href="">...</a>}
        onPageChange={this.handlePageClick}
        className="paginador"
        activeClassName="active"
    />
  </div>
  <div id="modal">
  
  <table>
                <tbody>
                    
                    <tr>
                        
                        <td className="centimg">{this.state.usuario.first_name} {this.state.usuario.last_name}</td>
                    </tr>
                    <tr>
                        
                        <td className="centimg"><img  alt="avatar" src={this.state.usuario.avatar}/></td>
                    </tr>
                  </tbody>
                </table>

                            
                            <button onClick={this.openModal}>x </button>
                            </div>    
                        
  </div>
  );
}

}


export default connect(mapState, mapDispatch)(UserTable);
