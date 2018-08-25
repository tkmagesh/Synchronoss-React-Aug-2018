function bugsReducer(currentState = [], action){
	if (action.type === 'LOADED'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'TOGGLE'){
		let toggledBug = action.payload;
		let newState = currentState.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newState = currentState.filter(bug => bug.id !== bugToRemove.id);
		return newState;
	}
	return currentState;
}
export default bugsReducer;
