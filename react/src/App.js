import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routers from './routers';
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/login'
import Layout from './pages/layout'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path='/login' component={Login}/> */}
          {/* {routers.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact ? route.exact : false}
                path={route.path}
                render={(props) => (
                  <route.component {...props} routers={Array.isArray(route.routers) ? route.routers : []} />
                )}
              />
            );
          })} */}
          
          <Route path='/login' component={Login} />
          <PrivateRoute path='/' component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
