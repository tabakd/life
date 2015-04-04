import React from "react";
import Cell from "./cell.jsx"

import { StyleResolverMixin, BrowserStateMixin } from 'radium';

import _ from "lodash";

var styles = {
  display: 'flex'
}

var CellRow = React.createClass({
  mixins: [StyleResolverMixin],
  renderCells() {
    return this.props.cells.map(function(c, x){
      return <Cell key={x} x={x} y={this.props.y} alive={c} />;
    }.bind(this))
  },
  render() {
    return <div style={this.buildStyles(styles)}>{this.renderCells()}</div>
  }
});

export default CellRow;