const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream(process.argv[3]);
  fileStream.pipe(res);
  fileStream.on('close', () => {
    res.end();
  });
});
server.listen(process.argv[2]);
