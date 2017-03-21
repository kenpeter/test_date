// https://stackoverflow.com/questions/10942931/converting-string-to-date-in-mongodb

// This is iso date
var myDate = '2017-03-01T22:31:40Z';

// don't use Date(xxxx) only
var newMyDate = new Date(myDate);

console.log(myDate);
console.log(newMyDate);
