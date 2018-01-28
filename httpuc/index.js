
const http = require('http');
const map = require('through2-map');

const uc = map(chunk => chunk.toString().toUpperCase());

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    request.pipe(uc).pipe(response);
  }
});
server.listen(process.argv[2]);
