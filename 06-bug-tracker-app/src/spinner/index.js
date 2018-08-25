import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var spinnerActionCreators = {
	increment(){
		let action = { type : 'INCREMENT' };
		return action;
	},
	decrement(){
		let action = { type : 'DECREMENT' };
		return action;
	}
};

let Spinner = ({ value, increment, decrement }) => (
	<div>
		<input type="button" value="Decrement" onClick={decrement} />
		<span> [ {value} ] </span>
		<input type="button" value="Increment" onClick={increment} />
	</div>
);

function mapStateToSpinnerProps(storeState){
	let spinnerValue = storeState.spinnerData;
	return {value : spinnerValue};
}
function mapDispatchToSpinnerProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);	
	return spinnerActions;
}
export default connect(
	mapStateToSpinnerProps,
	mapDispatchToSpinnerProps
)(Spinner);

