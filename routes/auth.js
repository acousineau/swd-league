const passport = require('passport')

module.exports = app => {
  // Google authentication routes
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get('/auth/google/callback', passport.authenticate('google'))

  // User API
  app.get('/api/user/details', (req, res) => {
    res.send(req.user)
  })
  app.get('/api/user/signout', (req, res) => {
    req.logout()
    res.send(req.user)
  })
}
