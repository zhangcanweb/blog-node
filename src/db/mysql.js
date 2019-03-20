const mysql = require('mysql')
sql_conf = require('../conf/db')

const con = mysql.createConnection(sql_conf)
con.connect()
function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return 
      }
      resolve(result)
    })
  })
}
// con.end()
module.exports = exec