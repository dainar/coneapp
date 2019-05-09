import React from 'react'
import $ from 'jquery';
import Header from './header.cmpt';



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




export default Resources;
