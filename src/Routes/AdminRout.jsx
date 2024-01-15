import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';

const AdminRout = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin();
    
    const location = useLocation()

    if(loading || isAdminLoading){
        <span className="loading loading-spinner loading-md"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to ="/" state={{from: location}} replace></Navigate>
    };

    AdminRout.propTypes = {
        children: PropTypes.node,
    };
    

export default AdminRout;