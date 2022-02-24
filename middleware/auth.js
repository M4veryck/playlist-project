// [All of auth.js idea taken from [1], this
// file was partially modified]
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authMiddleware = async (req, res, next) => {
  authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Invalid authentication')
  }

  token = authHeader.split(' ')[1]

  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: userInfo.userId, name: userInfo.name }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Invalid authentication')
  }
}

module.exports = authMiddleware
