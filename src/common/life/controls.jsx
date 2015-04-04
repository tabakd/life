import React from "react";

var Controls = React.createClass({
  onSpeedChange() {
    //GameStore.setState({speed:e.target.value})
  },
  render() {
    return <div className="controls">
      <button onClick={GameStore.toggleActive}>Active</button>
      <button onClick={GameStore.updateBoard}>Next</button>
    </div>
  }
});

export default Controls;