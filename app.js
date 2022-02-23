const express = require('express')
const app = express()
const connectDB = require('./db/connect')

require('express-async-errors')
require('dotenv').config()

// routers
const authRouter = require('./routes/auth')
const playlistsRouter = require('./routes/playlists')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authMiddleware = require('./middleware/auth')
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is the home page')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/playlists', authMiddleware, playlistsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// server start
const port = 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server started on port ${port}`))
  } catch (err) {
    console.log(err)
  }
}

start()
