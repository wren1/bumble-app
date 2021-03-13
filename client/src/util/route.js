import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  return (
    <Route {...props}>
      {(props.authenticated)? props.children  : <Redirect to="/login" />}
    </Route>
  )
};
// const ProtectedRoute = ({ component: Component, ...rest  }) => (
//   <Route {...rest} render={(props) =>
//     rest.needLogin !== true ? <Redirect to='/' /> : <Component {...props} />
//   }
//   />
// )
//  const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest}
//   render={(props) => 
//     rest.needLogin === true ? ( <Redirect to='/login' /> ) : ( <Component {...props} /> )
//     }
//     />
// );


export default ProtectedRoute;