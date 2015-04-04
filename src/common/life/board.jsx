import React from "react";

import CellRow from "./cell_row.jsx"
import { StyleResolverMixin, BrowserStateMixin } from 'radium';


import Fluxxor from "fluxxor";

var styles = {
  userSelect: 'none'
}

var Board = React.createClass({
  mixins: [Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("LifeStore"), StyleResolverMixin],
  componentDidMount() {
    setInterval(this.getFlux().actions.updateLifeBoard, 1000)
  },
  getStateFromFlux() {
    var flux = this.getFlux();
    return {
      board: flux.store('LifeStore').board
    }
  },
  renderRows() {
    return this.state.board.map(function(r, y){
      return <CellRow key={y} y={y} cells={r} />;           
    })
  },
  render() {
    return <div style={this.buildStyles(styles)}>{this.renderRows()}</div>
  }  
})

export default Board;