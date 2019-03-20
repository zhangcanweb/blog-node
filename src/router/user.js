const login = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const getCookieExpires = () => {
  let d = new Date()
  d.setTime(d.getTime()+(24*60*60*1000))
  return d.toGMTString()
}
const handleUserRouter = (req, res) => {
  const method = req.method
   //登陆博客的接口
   if (method === 'GET' && req.path === '/api/user/login') {
    // const { user, password } = req.body
    const { username, password } = req.query
    const result = login(username, password)
    return result.then(val => {
      if (val.username) {
        res.setHeader('Set-Cookie',`username=${val.username};path=/;httpOnly;expires=${getCookieExpires()}`)
        return new SuccessModel({
          username: val.username
        })
      } else {
        return new ErrorModel('登陆失败')
      }
    })
   
  }
}
module.exports = handleUserRouter
