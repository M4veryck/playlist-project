login = (req, res) => {
  res.send('This is the login')
}

register = (req, res) => {
  user = req.body
  res.json(user)
}

module.exports = {
  login,
  register
}