module.exports = (req, res, next) => {
  req.currentUser = req.user
  next()
}
