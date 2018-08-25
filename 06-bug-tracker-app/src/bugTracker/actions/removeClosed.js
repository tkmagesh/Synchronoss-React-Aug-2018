import bugApi from '../services/bugApi';

export function removeClosed(bugs){
	/*return function(dispatch){
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs.forEach(closedBug => {
			bugApi
				.remove(closedBug)
				.then(() => {
					let removeAction = { type : 'REMOVE', payload : closedBug};
					dispatch(removeAction);			
				})	
		})
		
	}*/

	return function(dispatch){
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs.forEach(async closedBug => {
			await bugApi.remove(closedBug);
			let removeAction = { type : 'REMOVE', payload : closedBug};
			dispatch(removeAction);			
		});
	}
}