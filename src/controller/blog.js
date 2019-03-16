const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: 'titleA',
      content: 'contentA',
      createTime: 1552395821768,
      author: 'zhangcan'
    },
    {
      id: 2,
      title: 'titleB',
      content: 'contentB',
      createTime: 1552395862333,
      author: 'lisi'
    },
  ]
}
const getDetail = id => {
  return [
    {
      id: 1,
      title: 'titleA',
      content: 'contentA',
      createTime: 1552395821768,
      author: 'zhangcan'
    }
  ]
}
const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}
const updateBlog = (id, blogData = {}) => {
  return true
}
const delBlog = id => {
  return true
}
module.exports= {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}