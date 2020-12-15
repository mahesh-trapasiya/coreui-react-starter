import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ authUser, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("idToken") && authUser.role !== "donor" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.users.authUser,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
