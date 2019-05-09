import React from 'react';
import { Router, Route, browserHistory} from 'react-router';
import Header from './components/header.cmpt';
import Dashboard from './components/dashboard.cmpt';
import Error404 from './components/error.cmpt';

import Users from './components/users.cmpt';


export default class Dash extends React.Component {
    componentWillMount = () => {}

    render() {
      return (
        <div className="admin">
          <Header />
          <Router history={browserHistory}>
          
            <Route  path='/' component={Dashboard}/>
            <Route  path='/users'  component={Users}/>
            <Route   component={Error404}/>
          </Router>
        </div>
      );
    }
}


