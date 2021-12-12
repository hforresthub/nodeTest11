const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'))

// handle homepage requests 
app.get('/index.html', (req, res) => {
	res.sendFile(__dirname + "/" + "index.html")
})

// process post
app.post('/process_post', urlencodedParser, (req, res) => {
	// prep output in json
	response = {
		firstName:req.body.firstNameP,
		lastName:req.body.lastNameP
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

// this responds with hello get to a get request
app.get('/', (req, res) => {
	console.log('to gather to get her together');
	res.send('hey GET')
})

// this responds to a post request for the homepage
app.post('/', (req, res) => {
	console.log('post the postmans poster');
	res.send('hello POST')
})

const server = app.listen(8081, 'localhost', () => {
	const host = server.address().address
	const port = server.address().port

	console.log('My app is listening at http://%s:%s', host, port);
})