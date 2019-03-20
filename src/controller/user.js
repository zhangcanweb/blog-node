const exec = require('../db/mysql')
const login = (user, password) => {
  const sql = `select realname, username from users where username='${user}' and pwd='${password}'`
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}
module.exports = login