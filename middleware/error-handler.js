const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    msg: err.message || 'Something went wrong, please try again later',
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  }
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join('. ')
    customError.statusCode = StatusCodes.BAD_REQUEST
  }
  if (err.code && err.code === 11000) {
    const duplicatedFields = Object.keys(err.keyValue)
      .map((key) => {
        return `${key}: ${err.keyValue[key]}`
      })
      .join(', ')
    customError.msg = `Duplicated [${duplicatedFields}] field(s), please choose some other values`
    customError.statusCode = StatusCodes.BAD_REQUEST
  }
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
