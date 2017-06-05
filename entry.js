// app.js
var fiz = require('./cds/app.js');
var cb = function (a, b) {
    console.log(b);
};
fiz.myHandler(null,null,cb);