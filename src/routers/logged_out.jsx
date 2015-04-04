import React from "react";
import Router from "react-router";
let { Route, DefaultRoute, RouteHandler } = Router;

import LandingPage from "../pages/landing/page";

import Fluxxor from "fluxxor";


let LoggedOutRouter = React.createClass({
  mixins: [Fluxxor.FluxMixin(React)],
  statics: {
    getRoutes() {
      return (
        <Route name="app" path="/" handler={LoggedOutRouter}>
          <DefaultRoute name="landing" handler={LandingPage} />
        </Route>
      );
    }
  },

  render() {
    return (
      <div id="container">
        <div id="main">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
});


export default LoggedOutRouter