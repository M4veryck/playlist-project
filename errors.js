// [All of errors.js idea taken from [1], this
// file was partially modified]
const { StatusCodes } = require('http-status-codes')

class BadRequestError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

class UnauthenticatedError extends Error {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
}
