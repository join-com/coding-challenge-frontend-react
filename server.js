let express = require('express');
let app = express();
let path = require('path');
app.use(express.static(path.join(__dirname, 'dist')));
let server = app.listen(process.env.PORT || 5000, () => {
	console.log(`Bikevex running on PORT:${server.address().port}`)
})