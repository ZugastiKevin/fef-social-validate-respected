import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import User from 'pages/User';
import Navbar from 'components/Navbar';
import ThemeContextProvider from 'context/ThemeContext';
import BtnToggle from 'components/BtnToggle';

const AppRoute = () => {
  const isLogged = useSelector((state) => state.ready);
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      )}
    />
  );

  return (
    <ThemeContextProvider>
      <BtnToggle />
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/profile' component={Profile} />
            <Route path='/user/:id'>
              <User />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeContextProvider>
  );
}

export default AppRoute;