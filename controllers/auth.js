const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

// helper function
const createToken = (user) =>
  jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })

// controllers
login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please enter email and password')
  }
  const user = await User.findOne({ email: email })
  if (!user) {
    throw new NotFoundError(`No user found with email ${email}`)
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new BadRequestError('Incorrect password')
  }
  const token = createToken(user)
  res.status(StatusCodes.OK).json({ user: user.name, token: token })
}

register = async (req, res) => {
  const user = await User.create(req.body)
  const token = createToken(user)
  res.status(StatusCodes.CREATED).json({ user: user.name, token: token })
}

module.exports = {
  login,
  register,
}
