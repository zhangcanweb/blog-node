const loginCheck = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
  const method = req.method
   //登陆博客的接口
   if (method === 'POST' && req.path === '/api/user/login') {
    const { user, password } = req.body
    const result = loginCheck(user, password)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('登陆失败')
    }
  }
}
module.exports = handleUserRouter
