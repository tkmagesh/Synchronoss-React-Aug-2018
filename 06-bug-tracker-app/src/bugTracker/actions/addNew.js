import bugApi from '../services/bugApi';

export function addNew(newBugName){
	/*return function(dispatch){
		let newBugData = {
			id : 0,
			name : newBugName,
			isClosed : false
		};
		bugApi
			.save(newBugData)
			.then(newBug => {
				let addNewAction = { type : 'ADD_NEW', payload : newBug};
				dispatch(addNewAction);		
			});
		
	}*/

	return async function(dispatch){
		let newBugData = {
			id : 0,
			name : newBugName,
			isClosed : false
		};
		let newBug = await bugApi.save(newBugData);
		let addNewAction = { type : 'ADD_NEW', payload : newBug};
		dispatch(addNewAction);
		
	}
}