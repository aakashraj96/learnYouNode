// const d = new Date();
// console.log(d.toString());
const d = new Date();
let month = `${d.getMonth() + 1}`;
let day = `${d.getDate()}`;
const year = d.getFullYear();

if (month.length < 2) month = `0${month}`;
if (day.length < 2) day = `0${day}`;

console.log(`${[year, month, day].join('-')} ${d.toString().slice(16, 21)}`);
