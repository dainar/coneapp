import React from 'react'


class EditUserForm extends React.Component {
  constructor(){
      super();
      this.state={
		user:{},
		invalid:false,
		vacio:false
      }
 
}

componentDidMount=()=>{
	this.setState({user:this.props.currentUser})
}

componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props !== prevProps) {
		var myData = JSON.stringify(this.props.users);
		window.localStorage.setItem('myData', myData);
  }
}

handleInputChange = event => {
	const { name, value } = event.target

	this.setState({user:{ ...this.state.user, [name]: value }})
}

handleSubmit = event => {
	event.preventDefault()

			if (this.state.user.email ==='' || this.state.user.first_name === '' || this.state.user.last_name === '' || this.state.user.avatar === ''){
				this.setState({vacio:true});
				return} 
				else{
					this.setState({vacio:false});
				}
			
					 
				
				 
					 this.props.updateUser(this.state.user.id, this.state.user)
					
			} 
		
		


render(){
	return (
    <form onSubmit={this.handleSubmit}>
      <label>Correo</label>
			<input type="text" name="email" value={this.state.user.email} onChange={this.handleInputChange} />
			<label>Nombre</label>
			<input type="text" name="first_name" value={this.state.user.first_name} onChange={this.handleInputChange} />
      {this.invalid ? (<span class="red" >Formato de correo incorrecto</span>) : ''}
			<label>Apellido</label>
			<input type="text" name="last_name" value={this.state.user.last_name} onChange={this.handleInputChange} />
			<label>Avatar</label>
			<input type="text" name="avatar" value={this.state.user.avatar} onChange={this.handleInputChange} />
      {this.vacio ? (<div><span class="red" >Ningun campo puede quedar vacio</span><br/></div>) : ''}
			<button>Editar usuario</button>
      <button onClick={() => this.props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )

}

}


export default EditUserForm
