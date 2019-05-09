import React from 'react'
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import { connect } from 'react-redux';
import { newUsers } from '../actions/admin.act';
import Header from './header.cmpt';

/* const mapState = (state) => {
  return {};
}

const mapDispatch = (dispatch) => {
  return {
    getUsers: (page, callback) => {
      newUsers(page, callback);
  }
  };
}


class Resources extends React.Component {
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

 */

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    },
    "posts": [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }]
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    },
        "posts": [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }]

  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    },
        "posts": [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }]

  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    },
        "posts": [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }]

  },
];




function DetailTable(props){
   return (     
                 <tr>
                  <td>{''}</td>
                  <td colspan="2">
                    <table>  
                      <tr>
                        <th>Nombre</th>
                        <th>Año</th>
                        <th>Color</th>
                        <th>Pantone</th>
                      </tr>
                    {
                      
                        <tr>
                          <td>{props.posts.name}</td>
                          <td>{props.posts.year}</td>
                          <td>{props.posts.color}</td>
                          <td>{props.posts.pantone_value}</td>
                        </tr>
                      
                    } 
                    </table>    
                  </td>
                 </tr>
   )
}


class Resources extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      resources: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount =()=>{
    $.ajax({
      url: "https://reqres.in/api/unknown",
      method: "GET",
      dataType: "JSON",
      
      success: (response) => {
          this.setState({resources:prepRecs(response.data)})
          function prepRecs(recs)
{
  var x = recs.map((x) => {
    return {
      id: x.id,
      resource: x,
      displayDetail: false
    }
  })
  return x
}

      },
      error: (jqXHR,exception) => {
         console.log(exception)
      }
  });

  }
  
  // toggles displayDetail on the appropriate record
  handleClick(rec) {
    let updatedList = this.state.resources.map(x => {
       
       if(x.id === rec.id) {
         return Object.assign({}, x, {
            displayDetail:!rec.displayDetail
         });
       }
       return x;
    });
    this.setState({
      resources : updatedList
    });
  }
  
  render() {
    return (
      <div className="admin">
        <Header/>
    <table>
        <tr>
          <th>{''}</th>
          <th>id</th>
          <th>nombre</th>
        </tr>
        {this.state.resources.map( 
            x => (
              <React.Fragment>
              <tr>
                <td>     
                  <button                    
                    onClick={() => this.handleClick(x)}
                  >
                    { x.displayDetail ? "-" : "+"}
                  </button>
                </td>
                <td>{x.resource.id}</td>
                <td style={{color:x.resource.color}}>{x.resource.name}</td>                
              </tr>
              { x.displayDetail &&
                  <DetailTable posts={x.resource}/>
              }                
              </React.Fragment>
            )                              
          )
        }
     </table>
     </div>
    )
  }
}
// adds a bool displayDetail and an id to each record



export default Resources;
