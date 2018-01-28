const http = require('http');

const urlArr = process.argv.slice(2);
const dataArr = [];
let count = 0;

const enclosingFunction = (i) => {
  http.get(urlArr[i], (response) => {
    dataArr[i] = '';
    response.on('data', (data) => {
      dataArr[i] += data.toString();
    });
    response.on('end', () => {
      count += 1;
      if (count === urlArr.length) {
        dataArr.forEach((item) => {
          console.log(item);
        });
      }
    });
  });
};
for (let i = 0; i < urlArr.length; i += 1) {
  enclosingFunction(i);
}
