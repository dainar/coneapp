import React, {  Fragment } from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import UserTable from './UserTable';
import $ from 'jquery';
import Header from './header.cmpt';



const initialFormState = { id: null, email: '', first_name: '', last_name:'', avatar:'' };

class Users extends React.Component {
    constructor(){
        super();
        this.state={
		  users:[],
		  currentUser:initialFormState,
          editing:false, 
          
        }
   
    }
    componentDidMount=()=>{
        
        $.ajax({
            url: "https://reqres.in/api/users?page=1",
            method: "GET",
            dataType: "JSON",
            success: (response) => {
            this.setState({users:response.data });
            window.localStorage.setItem("myData",JSON.stringify(response.data))
						},
            error: (jqXHR,exception) => {
              console.log(exception)

            }
        });
    }

	
	addUser = user => {
		user.id = Object.keys(this.state.users).length + 1;
		
	
		let newusers = [...this.state.users, user]
		this.setState({users:newusers}, function(){window.localStorage.setItem("myData",JSON.stringify([...this.state.users, user]));});
		
	
	};
	deleteUser = id => {
		this.setState({editing:false})
		var duser = JSON.parse(localStorage["myData"]);
		console.log(duser);
  for (var i = 0; i < duser.length; i++) {
     if(duser[i].id == id){
	const mydel = duser.splice(i,1);
	console.log(mydel);
	var myData = JSON.stringify(duser);
	console.log(duser);
	window.localStorage.setItem("myData", myData);
     }
  }
  
 
	const updatedUsers= this.state.users.filter(user => user.id !== id)
	this.setState({users:updatedUsers}, function(){
		var myData = JSON.stringify(updatedUsers);

window.localStorage.setItem("myData", myData)})
	
	};
	updateUser = (id, updateUser) => {
	
		const updated =this.state.users.map(user => (user.id === id ? updateUser : user))
		this.setState({users:updated}, function(){
			var myData = JSON.stringify(updated);

	window.localStorage.setItem("myData", myData);
		}) 
		this.setState({editing:false})
	};

	editRow = user => {
		this.setState({editing:true,currentUser:{id: user.id, email: user.email, first_name: user.first_name, last_name: user.last_name, avatar: user.avatar}})

		
	};

	setEditing = (bool)=>{
this.setState({editing:bool})
	}

	render() {
		return (
			<div className="admin">
			<Header />
			<div className="container">
			
			<h1></h1>
			<div className="flex-row">
				<div className="flex-large">
					{this.state.editing ? (
						<Fragment>
							<h2>Editar Usario</h2>
							<EditUserForm
								editing={this.state.editing}
								setEditing={this.setEditing}
								currentUser={this.state.currentUser}
								updateUser={this.updateUser}
								users={this.state.users}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Añadir usuario</h2>
							<AddUserForm addUser={this.addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Usuarios</h2>
					<UserTable users={this.state.users} editRow={this.editRow} deleteUser={this.deleteUser} />
				</div>
			</div>
		</div>
		</div>
		);
	}

}


export default Users;
