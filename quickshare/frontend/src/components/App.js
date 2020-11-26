import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/Header'
import '../styles/App.css'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './posts/Dashboard';
import Login from './accounts/Login'
import Register from './accounts/Register'

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import PrivateRoute from './common/PrivateRoute';

class App extends Component {
    componentDidMount(){
      store.dispatch(loadUser());
    }

    render() {
        return (
        	<Provider store={store}>
        	<Router>
        	<Header />
            <div className="container">
  				
  				<Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />                  
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
			</div>
			</Router>
			</Provider>
        );
    }
}

export default App;

