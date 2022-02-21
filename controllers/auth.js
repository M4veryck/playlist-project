login = (req, res) => {
  res.send('This is the login')
}

register = (req, res) => {
  res.send('This is the register')
}

module.exports = {
  login,
  register
}