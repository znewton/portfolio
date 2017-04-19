const express = require('express');
const path = require('path');
const open = require('open');
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port);


// serve static assets normally
app.use(express.static(__dirname + '/build'));

app.get('*', function (request, response){
	//
	response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

console.log("Server started on port " + port);

open('http://localhost:'+port);
