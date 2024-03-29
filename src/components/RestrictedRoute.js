import { Navigate } from "react-router-dom";
import authSelectors from "redux/authForm/authSelectors";
import { useSelector } from "react-redux";

export const RestrictedRoute = ({component: Component, redirectTo="/"}) => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo } /> : <Component/>
}