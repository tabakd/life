import LifeConstants from "./life/life.constants";

var actions = {
	toggleLifeCell(p){
		this.dispatch(LifeConstants.TOGGLE_CELL, p)
	},
	updateLifeBoard(){
		this.dispatch(LifeConstants.UPDATE_BOARD)
	}
}

export default actions;

