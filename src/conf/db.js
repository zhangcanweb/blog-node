const env = process.env.NODE_ENV

let SQL_CONF
if ( env === 'dev' ) {
  SQL_CONF = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'fq521zc',
    database: 'myblog'
  }
}
if ( env === 'production' ) {
  SQL_CONF = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'zc521fq',
    database: 'myblog'
  }
}
module.exports = SQL_CONF