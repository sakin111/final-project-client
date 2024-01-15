import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Private = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-md"></span>;
  }
  
  if (user) {
    return children;
  }
  
  return (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

Private.propTypes = {
    children: PropTypes.node,
};

export default Private;
