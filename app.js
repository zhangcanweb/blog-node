const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')

const handleServer = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  req.path = req.url.split('?')[0]
  req.query = querystring.parse(req.url.split('?')[1])
  const blogData = handleBlogRouter(req, res)
  if (blogData) {
    return res.end(  
      JSON.stringify(blogData)
    )
  }
  const userData = handleUserRouter(req, res)
  if (userData) {
    return res.end(
      JSON.stringify(userData)
    )
  }
  res.writeHeader(404, {'Content-Type': 'text/html;charset=utf-8'})
  res.end(`<h1>对不起  找不到该页面</h1>`)
}
module.exports = handleServer;