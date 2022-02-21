const express = require('express')
const app = express()
const authRouter = require('./routes/auth')

app.use('/api/v1/auth/', authRouter)

app.get('/', (req, res) => {
  res.send('This is the home page')
})

const port = 5000

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server started on port ${port}`) );
  }
  catch (err) {
    console.log(err);
  }
}

start()