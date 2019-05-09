import React from 'react';

const initialFormState = { id: null, email: '', first_name: '', last_name: "", avatar:'' }

class AddUserForm extends React.Component {
  constructor(){
      super();
      this.state={
		user: initialFormState,
		invalid:false,
		vacio:false
      }
 
}

handleInputChange = (event) => {
		
	const { name, value } = event.target;

		 
	this.setState({user:{ ...this.state.user, [name]: value }})
	
}

handleSubmit = (event) =>{
	event.preventDefault()
	console.log(this.state.user.nombre);
	
	console.log('hola')
	
		
			if (this.state.user.email ==='' || this.state.user.first_name === '' || this.state.user.last_name === '' || this.state.user.avatar === ''){
				this.setState({vacio:true});
				return} 
				else{
					this.setState({vacio:false});
				}
			
					 
				
				 
		this.props.addUser(this.state.user)
		this.setState({user:initialFormState})
			} 
		
		


render(){
	return (
		<form onSubmit={this.handleSubmit}>
			<label>Correo</label>
			<input type="text" name="email" value={this.state.user.email} onChange={this.handleInputChange} placeholder="ejemplo@ejemplo.com"/>
			<label>Nombre</label>
			<input type="text" name="first_name" value={this.state.user.first_name} onChange={this.handleInputChange} placeholder="Adrian"/>
			{this.invalid ? (<span class="red" >Formato de correo incorrecto</span>) : ''}
			<label>Apellido</label>
			<input type="text" name="last_name" value={this.state.user.lastname} onChange={this.handleInputChange} placeholder="Gonzalez"/>
			<label>Avatar</label>
			<input type="text" name="avatar" value={this.state.user.avatar} onChange={this.handleInputChange} placeholder="http://www.blabla.com/img.jpg"/>
			{this.state.vacio ? (<div><span class="red" >Ningun campo puede quedar vacio</span><br/></div>) : ''}
			<button>Añade un usuario</button>
		</form>
	)
}

}

export default AddUserForm;
