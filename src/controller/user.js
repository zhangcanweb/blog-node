const loginCheck = (user, password) => {
  if ( user === 'zhangsan' && password === '1234' ) {
    return true
  }
  return false
}
module.exports = loginCheck