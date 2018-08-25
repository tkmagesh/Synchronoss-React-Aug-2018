export function toggle(bugToToggle){
	let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
	let toggleAction = { type : 'TOGGLE', payload : {oldBug : bugToToggle, newBug : toggledBug}};
	return toggleAction;
}