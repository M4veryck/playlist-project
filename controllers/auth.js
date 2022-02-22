const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let createToken = (user) =>
  jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })

login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new Error()
  }
  const user = await User.findOne({ email: email })
  if (!user) {
    throw new Error()
  }
  if (bcrypt.compareSync(password, user.password) === false) {
    throw new Error()
  }
  const token = createToken(user)
  res.status(200).json({ user: user.name, token: token })
}

register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(
    req.body.password,
    bcrypt.genSaltSync(12)
  )
  const user = await User.create({ ...req.body, password: hashedPassword })
  const token = createToken(user)
  res.status(201).json({ user: user.name, token: token })
}

module.exports = {
  login,
  register,
}
