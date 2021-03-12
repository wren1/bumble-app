// import React from 'react';
// import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

// import UserList from './components/UsersList';


// function App() {

//   return (
//     <BrowserRouter>
//         <nav>
//             <ul>
//                 <li><NavLink to="/" activeClass="active">Home</NavLink></li>
//                 <li><NavLink to="/users" activeClass="active">Users</NavLink></li>
//             </ul>
//         </nav>
//         <Switch>
//             <Route path="/users">
//                 <UserList />
//             </Route>

//             <Route path="/">
//                 <h1>My Home Page</h1>
//             </Route>
//         </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;


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

 const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
  render={(props) => 
    rest.needLogin === true ? ( <Redirect to='/login' /> ) : ( <Component {...props} /> )
    }
    />
);

const ProtectedRoute = ({ component: Component, ...rest  }) => (
  <Route {...rest} render={(props) =>
    rest.needLogin !== true ? <Redirect to='/' /> : <Component {...props} />
  }
  />
)

const App = ({ needLogin, loadToken }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadToken()
  }, []);

  return (
    <CssBaseline>
      <Theme>
        <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignupForm} />
          <Route exact path='/user/:userId' component={ProfilePage} />
          <Route exact path='/user/:userId/likes' component={LikesPage} />
          <Route path='/search/:query' component={SearchPage} />
          <Route path='/search' component={SearchPage} />
          <Route exact path='/tags/:tag' component={TagsPage} />
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
