import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";

export default function PublicRoute({ 
    children,
    restricted = false,
    navigateTo = '/contacts'    
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldNavigate = isLoggedIn && restricted;
    return (        
            shouldNavigate ? <Navigate to={navigateTo} /> : children
           );
};