// default http request

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

req.end()

// next test

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

// req.end()

// end test 
