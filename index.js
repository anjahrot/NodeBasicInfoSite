const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  
let path = './';
switch(req.url) {
  case '/':
    path += 'index.html';
    res.statusCode = 200;
    break;
  case '/about':
    path += 'about.html';
    res.statusCode = 200;
    break;
  case '/contact-me':
    path += 'contact-me.html';
    res.statusCode = 200;
    break;
  default:
    path += '404.html';
    res.statusCode = 404;
    break;
}


fs.readFile(path, function(err, data){
    res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
    if (err) {
      console.log(err)
      return res.end();
    }
    return res.end(data);
  })

}).listen(8080, 'localhost', () => {
  console.log('Listening for requests on port 8080')
});