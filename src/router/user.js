const handleUserRouter = (req, res) => {
  const method = req.method
   //登陆博客的接口
   if (method === 'POST' && req.path === '/api/blog/login') {
    return {
      msg: '登陆博客的接口'
    }
  }
}
module.exports = handleUserRouter
