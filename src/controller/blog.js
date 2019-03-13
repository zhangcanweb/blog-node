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
module.exports= {
  getList,
  getDetail
}