const express = require('express')
const app = express()

app.use(
	express.urlencoded({
		extended: true
	})
)

app.use(express.json())

app.post('/', (req, res) => {
	console.log(req.body.todo) // .body gets the data
})

const server = app.listen(8082, 'localhost', () => {
	const host = server.address().address
	const port = server.address().port

	console.log('My app is listening at http://%s:%s', host, port);
})


// const server = http.createServer((req, res) => {
// 	req.on('data', chunk => {
// 		console.log(`Data chunk available: ${chunk}`)
// 	})
// 	req.on('end', () => {

// 	})
// })