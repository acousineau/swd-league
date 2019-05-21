const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const config = require('./config/keys')
// Run code in following sources
require('./models/User')
require('./services/passport')

const app = express()

// DB Connection
mongoose.connect(config.mongoConnection, { useNewUrlParser: true })

// Establish cookie session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

// Route registraction
require('./routes/auth')(app)

// Server Start
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`)
})
