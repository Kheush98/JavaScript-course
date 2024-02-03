const http = require('http');
const fs = require('fs');

const posts = [
  {id: 1, title: 'Post 1', body: 'This is post one'},
  {id: 2, title: 'Post 2', body: 'This is post two'}
]
const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    fs.readFile('index.html', (err, file) => {
      if (err) {
        response.writeHead(500, {'content-type': 'text/html'});
        response.end('<h1>Server is down</h1>');
      } else {
        response.writeHead(200, {'content-type': 'text/html'});
        response.end(file);
      }
    })
  }
  if (url === '/api/posts') {
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify({success: true, data: posts}));
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});