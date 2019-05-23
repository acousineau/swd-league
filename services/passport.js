const jwt = require('jwt-simple')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('../config/keys')

const User = mongoose.model('users')

// The following generates a cookie and passes it down to the browser via a "setCookie" header
// @user - the user passed from the google strategy (second argument from done)
// Takes in a user and generates a token
passport.serializeUser((user, done) => {
  // Generates a JWT Token using the user.id and creates a cookie
  // that is then sent as a cookie
  done(null, tokenForUser(user))
})

// Takes in a token and generates a user
passport.deserializeUser((token, done) => {
  // Decode the token
  const userId = jwt.decode(token, config.jwtSecret).sub
  User.findById(userId)
    .then(user => {
      done(null, user)
    })
    .catch(err => {
      done(err, false)
    })
})

const tokenForUser = user => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, config.jwtSecret)
}

// // Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.jwtSecret
}

// Create JWT Strategy - will be used for authenticated requests after login
passport.use(
  new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub)
      .then(user => {
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
      })
      .catch(err => done(err, false))
  })
)

// 'google' - Covers Signing In and Up
passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        // we have record with given profile id
        return done(null, existingUser)
      }

      // we don't have a record - we need to sign up this user
      const user = await new User({
        googleId: profile.id
      }).save()

      done(null, user)

      // .catch(err => {
      //   done(err, false)
      // })
    }
  )
)
