const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const cookieSession = require('cookie-session') // Make use of cookies
const passport = require('passport') // Tell passport to use cookies

const config = require('./config/keys')

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')

// Run code in following sources
require('./models/User')
require('./services/passport')

const app = express()

// DB Connection
mongoose.connect(config.mongoConnection, { useNewUrlParser: true })

// Middelware
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
// Use Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 Days
    keys: [config.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

// Route registraction
app.use('/auth', authRoutes)
app.use('/api/users', usersRoutes)

// Server Start
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`)
})
