//Problem: We need a simple way to look at a user's badge count and js points from browser
//Solution: Use Node.js to perform profile lookups and serve our templates via http

//1. Create a web server
var http = require('http');
var router = require("./router.js");
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
  //response.end('Hello World\n');}).listen(3000);
console.log('Server running at http://<workspace-url>');

    //get json from Treehouse
        //on "end"
          //show profile
        //on "error"
          //show error
//4. Function that handles the reading of files and merge in values
  //read from file and get a string
     //merge values into string