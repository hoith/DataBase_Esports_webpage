var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_ruizmig',
    password        : '1159',
    database        : 'cs340_ruizmig',
    dateStrings     : 'date'
});




module.exports.pool = pool;