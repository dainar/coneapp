import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import Error404 from './components/error.cmpt';


import Login from './components/login.cmpt';
import Register from './components/register.cmpt';
import Resouces from './components/Resouces.cmpt';
import Users from './components/users.cmpt';



export default class App extends React.Component {
  componentDidMount(){
    document.title = "Conektapp"
  }
    render() {
      const baseUrl = process.env.PUBLIC_URL;
        return (
          <div>
            <Router  history={browserHistory}>
            
            
                <Route  path= {baseUrl + ''}>
                  <IndexRoute component={Users}/>
                  <Route path= {baseUrl + 'login'}  component={Login}/>
              <Route path= {baseUrl + 'register'}  component={Register}/>
                  <Route path= {baseUrl + 'recursos'} component={Resouces}/>
                  <Route  path= {baseUrl + 'users'}  component={Users}/> 
                  <Route  path= {baseUrl + '*'} component={Error404}/>
                </Route>
            </Router>
          </div>
        );
    }
}

