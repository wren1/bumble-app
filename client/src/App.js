import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { loadToken } from './store/actions/auth';

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProfilePage from './components/ProfilePage';
import LikesPage from './components/LikesPage';
import SearchPage from './components/SearchPage';
import TagsPage from './components/TagsPage';
import Theme, { theme } from './themes/Theme.js';
import ProtectedRoute from './util/route';


const App = ({ needLogin, loadToken }) => {
  const authenticated = useSelector(state => !!state.authentication.token)
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   loadToken()
  // }, []);

  useEffect(() => {
    (async() => {
      await loadToken();
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }



  return (
    <CssBaseline>
      <Theme>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/signup' component={SignupForm} />
            <Route exact path='/user/:userId' component={ProfilePage} />
            <Route exact path='/user/:userId/likes' component={LikesPage} />
            <Route path='/search/:query' component={SearchPage} />
            <Route path='/search' component={SearchPage} />
            <Route exact path='/tags/:tag' component={TagsPage} />
            <ProtectedRoute exact={true} path='/' authenticated={authenticated} >
              <Home />
            </ProtectedRoute>
          </Switch>
        </BrowserRouter>
      </Theme>
    </CssBaseline>
  );
}

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />
}

export default AppContainer;
