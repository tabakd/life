import Fluxxor from "fluxxor";
import constants from "./life.constants";

var LifeStore = Fluxxor.createStore({
  initialize() {
    this.state = {};
    this.state.height = 10;
    this.state.width = 10;
    this.state.speed = 1000;
    this.state.active = true;
    this.board = [[]]
    this.createBoard()

    this.bindActions(
      constants.TOGGLE_CELL, this.toggleCell,
      constants.TOGGLE_ACTIVE, this.toggleActive,
      constants.UPDATE_BOARD, this.updateBoard
    )

  },
  createBoard() {
    this.board = [];
    for(var x = 0; x < this.state.height; x++){
      this.board[x] = [];    
      for(var y = 0; y < this.state.width; y++){ 
        this.board[x][y] = false;    
      }    
    }
    this.emit("change");
  },
  cellsAdj(p) {
    var adj = [
        this.board[p.x+1][p.y],
        this.board[p.x-1][p.y],
        this.board[p.x][p.y+1],
        this.board[p.x][p.y-1]
    ]
    return _.compact(adj).length
  },
  iterateBoard(cb) {
    for(var y=0;y<this.board.length;y++){
      for(var x=0;x<this.board[y].length;x++){          
        cb({x: x, y: y})
      }
    }
  },
  updateBoard() {
    if(this.state.active){
      var b = this.board
      this.iterateBoard(function(p){
      }.bind(this))
      this.emit("change");
    }
  },
  toggleActive() {
    this.state.active = !this.state.active;
  },
  toggleCell(p){
    this.board[p.y][p.x] = !this.board[p.y][p.x]
    this.emit("change");
  }
})

export default LifeStore;