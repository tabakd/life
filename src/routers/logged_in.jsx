import React from "react";
import Router from "react-router";
let { Route, DefaultRoute, RouteHandler, Link } = Router;

import HomePage from "../pages/home/page";

import Fluxxor from "fluxxor";

let LoggedInRouter = React.createClass({
  mixins: [Fluxxor.FluxMixin(React)],
  statics: {
    getRoutes() {
      return (
        <Route name="app" path="/" handler={LoggedInRouter}>
          <DefaultRoute name="home" handler={HomePage} />
        </Route>
      );
    }
  },

  render() {
    return (
      <div id="container">
        <div id="navigation">
          <header>
            <ul>
              <li><Link to="home">Home</Link></li>
            </ul>
          </header>
        </div>

        <div id="main">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }
});


export default LoggedInRouter