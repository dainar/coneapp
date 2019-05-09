import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import Error404 from './components/error.cmpt';
import Dash from './dash.cmpt'
import Login from './components/login.cmpt';
import Register from './components/register.cmpt';
import Recursos from './components/dashboard.cmpt';
import Users from './components/users.cmpt';
import Header from './components/header.cmpt';


export default class App extends React.Component {
  componentDidMount(){
    document.title = "Conektapp"
  }
    render() {
        return (
          <div>
            <Router history={browserHistory}>
            
            
                <Route  path="/">
                  <IndexRoute component={Recursos}/>
                  <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
                  <Route  path='/recursos' component={Recursos}/>
                  <Route  path='users'  component={Users}/> 
                  <Route  path="*"  component={Error404}/>
                </Route>
            </Router>
          </div>
        );
    }
}

