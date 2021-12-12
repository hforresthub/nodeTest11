const http = require('http')

const server = http.createServer((req, res) => {
	let data = ''
	req.on('data', chunk => {
		console.log(`Data chunk available: ${chunk}`)
		data += chunk
	})
	req.on('end', () => {
		console.log(JSON.parse(data).games[1])
		res.end()
	})
})

server.listen(8081)