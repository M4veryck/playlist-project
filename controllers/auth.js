const User = require('../models/User')

login = (req, res) => {
  res.send('This is the login')
}

register = async (req, res) => {
  const user = await User.create({ ...req.body })
  res.status(201).json(user)
}

module.exports = {
  login,
  register,
}
