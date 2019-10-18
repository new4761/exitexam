var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3308",
    user: "new",
    password: "test",
    database: "test"
});
con.connect(function (err) {
    if (err) throw err;
    // console.log("Connected!");
    // con.query("SELECT * FROM Persons", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    // }

    // )


});


module.exports = con;