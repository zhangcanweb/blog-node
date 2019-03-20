const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id 
  //获取博客列表接口
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }
  //获取博客详情的接口
  if (method === 'GET' && req.path === '/api/blog/detail') {
    // const detailData = getDetail(id)
    // return new SuccessModel(detailData)
    const result = getDetail(id)
    return result.then(detialData => {
      return new SuccessModel(detialData)
    })
  }
  //新增博客的接口
  if (method === 'POST' && req.path === '/api/blog/new') {
    // const blogData  = newBlog(req.body)
    // return new SuccessModel(blogData)
    req.body.author = 'zhangsan' //假数据
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }
  //更新博客的接口
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
   
  }
  //删除博客的接口
  if (method === 'POST' && req.path === '/api/blog/del') {
    const author='zhangsan'
    const result = delBlog(id, author)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
   
  }
}
module.exports = handleBlogRouter