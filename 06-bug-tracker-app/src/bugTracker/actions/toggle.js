import bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	/*return function(dispatch){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
		bugApi
			.save(toggledBugData)
			.then(toggledBug => {
				let toggleAction = { type : 'TOGGLE', payload : toggledBug};
				dispatch(toggleAction);		
			});
	}*/

	return async function(dispatch){
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
		let toggledBug = await bugApi.save(toggledBugData)
		let toggleAction = { type : 'TOGGLE', payload : toggledBug};
		dispatch(toggleAction);
	}
}