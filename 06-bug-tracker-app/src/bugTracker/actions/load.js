import bugApi from '../services/bugApi';

export function load(){
	/*return function(dispatch){
		bugApi
			.getAll()
			.then(bugs => {
				let loadAction = { type : 'LOADED', payload : bugs };
				dispatch(loadAction);		
			});
	}*/

	return async function(dispatch){
		let bugs = await bugApi.getAll();
		let loadAction = { type : 'LOADED', payload : bugs };
		dispatch(loadAction);		
	}
}