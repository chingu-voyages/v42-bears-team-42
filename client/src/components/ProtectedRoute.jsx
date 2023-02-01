import { Route, redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  return ( 
    <Route 
      {...rest}
      render={(props) => {
        localStorage.getItem('authToken') ? 
        (<Component {...props} />) : 
        (< redirect to="/" />)
      }}
    />
  );
}

export default ProtectedRoute;