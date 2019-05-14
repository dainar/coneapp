import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect, hashHistory } from 'react-router';
import Error404 from './components/error.cmpt';

import Login from './components/login.cmpt';
import Register from './components/register.cmpt';
import Resources from './components/Resouces.cmpt';
import Users from './components/users.cmpt';



export default class App extends React.Component {
  componentDidMount(){
    document.title = "Conekxtapp"
  }
    render() {
      
        return (
          <div>
            <Router  history={browserHistory}>
            
            
                <Route  path={process.env.PUBLIC_URL + '/'}>
                  <IndexRoute component={Users}/>
                  </Route>
                  <Route path={ process.env.PUBLIC_URL +'/login'} component={Login}/>
              <Route path={process.env.PUBLIC_URL + '/register'} component={Register}/>
                  <Route  path={ process.env.PUBLIC_URL +'/recursos'} component={Resources}/>
                  <Route  path={ process.env.PUBLIC_URL +'/users'}  component={Users}/> 
                  
                
            </Router>
          </div>
        );
    }
}

