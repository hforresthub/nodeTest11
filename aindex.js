// axios post test

const axios = require('axios')

axios
	.post('http://localhost:8081/', {
		todo: 'buy some milk',
		games: ['kenshi', 'skyrim', 'minecraft', 'valheim']
	})
	.then(res => {
		console.log(`statusCode: ${res.status}`)
		console.log(res);
	})
	.catch(error => {
		console.error(error)
	})

