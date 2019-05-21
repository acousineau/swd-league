const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const config = require('../config/keys')

const User = mongoose.model('users')

// Get userId based on user
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// Get user based on userId
passport.deserializeUser((userId, done) => {
  User.findById(userId).then(user => {
    done(null, user)
  })
})

// 'google'
passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we have record with given profile id
          done(null, existingUser)
        } else {
          // we don't have a record
          const user = new User({
            googleId: profile.id
          })
          user.save().then(user => {
            done(null, user)
          })
        }
      })
    }
  )
)
