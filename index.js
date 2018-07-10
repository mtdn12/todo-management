const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const keys = require('./config/keys')

//Routes list
const users = require('./routes/api/users')
const todos = require('./routes/api/todos')
const history = require('./routes/api/history')
const daily = require('./routes/api/daily')


const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// DB Config
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err))

// Passport middleware

app.use(passport.initialize())

// passport Config
require('./config/passport')(passport)

// Use Routes
app.use("/api/users", users)
app.use("/api/todos", todos)
app.use("/api/history", history)
app.use("/api/dailys", daily)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

let PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})