const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !=='application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData+=chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      } else {
        resolve(
          JSON.parse(postData)
        )
      }
    })
  })
}
const handleServer = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  req.path = req.url.split('?')[0]
  req.query = querystring.parse(req.url.split('?')[1])
  req.cookie={}
  cookieStr = req.headers.cookie || ''
  cookieStr.split(';').forEach(item => {
    if (!item) {
      return 
    }
    const key=item[0].trim()
    const val=item[1].trim()
    req.cookie[key]=val
  })
  getPostData(req).then(data => {
    console.log(data)
    req.body = data
    const blogresult = handleBlogRouter(req, res)
    if (blogresult) {
      blogresult.then(blogData => {
        res.end(  
          JSON.stringify(blogData)
        )
      })
      return 
    }
   
    
    const userresult = handleUserRouter(req, res)
    if (userresult) {
      userresult.then(userData => {
        res.end(  
          JSON.stringify(userData)
        )
      })
      return 
    }
    res.writeHeader(404, {'Content-Type': 'text/html;charset=utf-8'})
    res.end(`<h1>对不起  找不到该页面</h1>`)
  })
 
}
module.exports = handleServer;