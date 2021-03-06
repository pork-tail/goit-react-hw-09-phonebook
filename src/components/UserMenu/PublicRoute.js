import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth.selectors";

const PublicRoute = ({
  component: Component,
  redirectTo,
  restricted = false,
  ...routeProps
}) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      render={(props) => {
        return isAuthenticated && restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
