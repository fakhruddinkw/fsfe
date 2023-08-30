const http = require("http");

http.createServer(function(req,res){
	res.write('Welcome to Disco!');
	res.end();
}).listen(3000);
console.log('Server started on Port:3000');
