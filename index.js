// const axios = require('axios')

// axios
// 	.post('http://localhost:8081/', '')
// 	.then(res => {
// 		console.log(`statusCode: ${res.status}`)
// 		console.log(res);
// 	})
// 	.catch(error => {
// 		console.error(error)
// 	})

const http = require('http')

const data = JSON.stringify({
	todo: 'buy some milk'
})

const options = {
	hostname: 'localhost',
	port: 8081,
	path: '/',
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Content-Length': data.length
	}
}

const req = http.request(options, res => {
	console.log(`statusCode: ${res.statusCode}`)

	res.on('data', d => {
		process.stdout.write(d)
	})
})

req.on('error', error => {
	console.error(error)
})

req.write(data)

// const options = {
// 	hostname: 'localhost',
// 	port: 8081,
// 	path: '/',
// 	method: 'GET'
// }

// const req = https.request(options, res => {
// 	console.log(`statusCode: ${res.statusCode}`)

// 	res.on('data', d => {
// 		process.stdout.write(d)
// 	})
// })

// req.on('error', error => {
// 	console.error(error)
// })

req.end()