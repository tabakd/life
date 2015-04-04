import React from "react";
import Board from "./board.jsx"
import Controls from "./controls.jsx"

var Game = React.createClass({
  render() {
    return <div className="game"><Board/><Controls/></div>
  }
});

export default Board;