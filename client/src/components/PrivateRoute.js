import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props => {
        //if auth is good sent to root path
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        }
        //if auth is bad sent to root path
        return <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
