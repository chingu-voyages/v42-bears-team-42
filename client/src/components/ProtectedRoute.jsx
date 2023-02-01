import { Route, useNavigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const navigate = useNavigate();

  console.log('Component:', Component);
  console.log('rest:', rest);
  return ( 
    <Route 
      {...rest}
      render={(props) => {
        localStorage.getItem('authToken') ? 
        (<Component {...props} />) : 
        navigate('/');
      }}
    />
  );
}

export default ProtectedRoute;