const reqs = require('../../../required_modules')

module.exports = (req, res, next) => {
  var token = req.headers['x-access-token']

  if (!token)
    return res.status(403).send("Brak tokenu")

  reqs.jwt.verify(token, reqs.config.secret, (err, decoded) => {
    if (err)
      return res.status(500).send("Weryfikacja zakończona niepowodzeniem")

    req.userId = decoded.id
    console.log('zweryfikowano')
    next()
  })
}
