var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log('Month: ', date.getYear());

// var date = moment();
// date.add(1, 'years')
// console.log(date.format('MMM Do, YYYY'));

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))