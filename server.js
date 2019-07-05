const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', function (req, res) {
	res.sendfile('./dist/index.html');
});

let server = app.listen(port, () => {
	console.log(`Bikevex running on PORT:${server.address().port}`)
})