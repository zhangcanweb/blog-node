const http = require('http')
const handleServer = require('../app.js')
const port = 8000

const server = http.createServer(handleServer)
server.listen(port, err => {
  if (err) throw err
  console.log('success')
})