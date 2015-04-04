import React from "react";
import Fluxxor from "fluxxor";
import { StyleResolverMixin, BrowserStateMixin } from 'radium';

var styles = {
  width: 10,
  height: 10,
  margin: 1,
  display: 'inline-block',
  backgroundColor: 'black',
}


var Cell = React.createClass({
  mixins: [Fluxxor.FluxMixin(React), StyleResolverMixin],
  toggleCell() {
    this.getFlux().actions.toggleLifeCell({
      x: this.props.x,
      y: this.props.y 
    })
  },
  shouldComponentUpdate(n){
    return n.alive !== this.props.alive
  },
  render() {
    var styles = {
      width: 10,
      height: 10,
      margin: 1,
      display: 'inline-block',
      backgroundColor: this.props.alive ? 'grey' : 'lightgrey'
    }
    return <div style={this.buildStyles(styles)} onClick={this.toggleCell} className="cell"/>;
  }
});

export default Cell;