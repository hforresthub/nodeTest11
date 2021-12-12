const http = require('http')

// const server = http.createServer((req, res) => {
// 	let data = ''
// 	req.on('data', chunk => {
// 		console.log(`Data chunk available: ${chunk}`)
// 		data += chunk
// 	})
// 	req.on('end', () => {
// 		console.log(JSON.parse(data).games[1])
// 		res.end()
// 	})
// })

// same but with awaits 

const server = http.createServer(async (req, res) => {
	const buffers = []

	for await (const chunk of req) {
		buffers.push(chunk)
	}

	const data = Buffer.concat(buffers).toString()

	console.log(JSON.parse(data).games)
	res.end()
})

server.listen(8081)