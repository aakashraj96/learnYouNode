// const arr = process.argv.slice(2);
// console.log(arr.reduce((prev, curr) => prev + Number(curr), 0));


const arraySum = (...arr) => arr.reduce((prev, curr) => prev + Number(curr), 0);
module.exports = arraySum;
