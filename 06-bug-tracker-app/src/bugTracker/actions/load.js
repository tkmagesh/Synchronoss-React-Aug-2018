import axios from 'axios';

function getBugsSync(){
	return [
		{name : 'Bug - 1', isClosed : false},
		{name : 'Bug - 2', isClosed : true},
		{name : 'Bug - 3', isClosed : false}
	];
}
export function load(){
	return function(dispatch){
		axios
			.get('http://localhost:3030/bugs')
			.then(response => response.data)
			.then(bugs => {
				let loadAction = { type : 'LOADED', payload : bugs };
				dispatch(loadAction);		
			});
	}
}