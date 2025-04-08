import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div className="wrapper" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h2>Loading...</h2>
    </div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return children;
};

export default ProtectedRoute;