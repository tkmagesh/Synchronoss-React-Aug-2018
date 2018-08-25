import axios from 'axios';

let apiUrl = 'http://localhost:3030/bugs';

function getAll(){
	return axios
		.get(apiUrl)
		.then(response => response.data)
}

function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(apiUrl, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(`${apiUrl}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}

function remove(bugData){
	return axios
		.delete(`${apiUrl}/${bugData.id}`)
		.then(response => response.data);
}

let bugApi = { getAll, save, remove };

export default bugApi;