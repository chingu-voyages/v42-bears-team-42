import { Route, useNavigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  return ( 
    <Route 
      {...rest}

    />
  );
}

//      render=
export default ProtectedRoute;