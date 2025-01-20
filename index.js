const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile('/index.html', {root: __dirname }));
app.get("/about", (req, res) => res.sendFile('./about.html', {root: __dirname }));
app.get("/contact-me", (req, res) => res.sendFile('./contact-me.html', {root: __dirname }));

//404 if none of above matches
app.use( (req, res) => res.status(404).sendFile('./404.html', {root: __dirname }));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});


// switch(req.url) {
//   case '/':
//     path += 'index.html';
//     res.statusCode = 200;
//     break;
//   case '/about':
//     path += 'about.html';
//     res.statusCode = 200;
//     break;
//   case '/contact-me':
//     path += 'contact-me.html';
//     res.statusCode = 200;
//     break;
//   default:
//     path += '404.html';
//     res.statusCode = 404;
//     break;
// }


// fs.readFile(path, function(err, data){
//     res.writeHead(res.statusCode, {'Content-Type': 'text/html'});
//     if (err) {
//       console.log(err)
//       return res.end();
//     }
//     return res.end(data);
//   })

// }).listen(8080, 'localhost', () => {
//   console.log('Listening for requests on port 8080')
// });