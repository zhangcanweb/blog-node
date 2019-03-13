const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  const method = req.method
  //获取博客列表接口
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }
  //获取博客详情的接口
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: '获取博客详情的接口'
    }
  }
  //新增博客的接口
  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '新增博客的接口'
    }
  }
  //更新博客的接口
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新博客的接口'
    }
  }
  //删除博客的接口
  if (method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '获取博客详情的接口'
    }
  }
}
module.exports = handleBlogRouter