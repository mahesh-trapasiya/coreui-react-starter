import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import history from "../Helpers/history";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
const Routes = () => {
  //   const { authUser } = useSelector((state) => state.users);

  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" name="Home" component={Layout} exact />
        <Route path="/login" name="login" component={Login} exact />
        <Route path="/register" name="signup" component={Signup} exact />
      </Switch>{" "}
    </Router>
  );
};

export default Routes;
