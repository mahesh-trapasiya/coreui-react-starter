import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("email") ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <>
            {console.log(props)}
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          </>
        )
      }
    />
  );
};

// const mapStateToProps = (state) => {
//   return {
//     authUser: state.users.authUser,
//   };
// };

export default PrivateRoute;
