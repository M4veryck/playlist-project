const User = require('../models/User')
const jwt = require('jsonwebtoken')

login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new Error()
  }
  const user = await User.findOne({ email: email })
  if (!user) {
    throw new Error()
  }
  if (user.password !== password) {
    throw new Error()
  }
  const token = jwt.sign(
    { userId: user._id, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )
  res.status(200).json({ user: user.name, token: token })
}

register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = jwt.sign(
    { userId: user._id, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )
  res.status(201).json({ user: user.name, token: token })
}

module.exports = {
  login,
  register,
}
