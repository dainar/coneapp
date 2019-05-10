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
            
            
                <Route  path= '/'>
                  <IndexRoute component={Users}/>
                  <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
                  <Route  path='/recursos' component={Resources}/>
                  <Route  path='/users'  component={Users}/> 
                  <Route  path="*"  component={Error404}/>
                </Route>
            </Router>
          </div>
        );
    }
}

