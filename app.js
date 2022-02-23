const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')

require('express-async-errors')
require('dotenv').config()

// routers
const authRouter = require('./routes/auth')
const playlistsRouter = require('./routes/playlists')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authMiddleware = require('./middleware/auth')

app.set('trust proxy', 1)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
)

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

app.get('/', (req, res) => {
  res.send('This is the home page')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/playlists', authMiddleware, playlistsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// server start
const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()
