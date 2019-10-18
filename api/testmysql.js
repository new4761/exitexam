
var express = require('express')
var app = express()
var sql = require('../db/conmysql')



app.get('/', (req, res, next) => {   // Router เวลาเรียกใช้งาน
    let sqlCommand = 'SELECT * FROM Persons'  // คำสั่ง sql
    sql.query(sqlCommand, (err, results) => { // สั่ง Query คำสั่ง sql
        if (err) throw err  // ดัก error
        console.log(results) // แสดงผล บน Console
        res.json(results)
        // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser

    })
})

app.get('/:id', (req, res, next) => {   // Router เวลาเรียกใช้งาน
    let id = parseInt(req.params.id);
    let sqlCommand = 'SELECT * FROM Persons WHERE PersonsID = ?'  // คำสั่ง sql
    sql.query(sqlCommand,[id],  (err, results) => { // สั่ง Query คำสั่ง sql
        if (err) throw err  // ดัก error
        console.log(results) // แสดงผล บน Console
        res.json(results)

    })
})
app.post('/add', function (req, res,next) {
    let sqlCommand = "INSERT INTO  Persons values('213','asdasd','sadasd','asdasd','asdasd')"
    sql.query(sqlCommand, (err, results) => { // สั่ง Query คำสั่ง sql
        if (err) throw err  // ดัก error
    })

})
app.delete('/delete', function (req, res) {
    let sqlCommand = 'DELETE FROM Persons'  // คำสั่ง sql
    sql.query(sqlCommand, (err, results) => { // สั่ง Query คำสั่ง sql
        if (err) throw err  // ดัก error

    })
})

module.exports = app