import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
function ProtectedRoute({ component: Component, ...rest }) {
  const { loggedIn } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
}
export default ProtectedRoute;
