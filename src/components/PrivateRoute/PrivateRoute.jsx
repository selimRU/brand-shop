import { useContext } from "react";
import { Context } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    const location = useLocation()
    if (loading)
        <>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </>
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;