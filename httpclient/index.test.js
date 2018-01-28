const https = require('https');

https.get(process.argv[2], (response) => {
  console.log('fired');
  response.on('data', (data) => {
    console.log(data);
  });
});
