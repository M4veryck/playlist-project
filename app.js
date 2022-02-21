const express = require('express')
const app = express()
const connectDB = require('./db/connect');
const { connect } = require('./routes/auth');
require('dotenv').config();

// routers
const authRouter = require('./routes/auth')
const playlistsRouter = require('./routes/playlists')

// middleware
app.use(express.json())

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/playlists', playlistsRouter)

app.get('/', (req, res) => {
  res.send('This is the home page')
})


// server start
const port = 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server started on port ${port}`) );
  }
  catch (err) {
    console.log(err);
  }
}

start()