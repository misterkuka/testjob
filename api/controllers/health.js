const reqs = require('../../required_modules')

module.exports = (req , res) => {

  const health = {
    uptime: process.uptime(),
    message: 'Feeling Good',
    timestamp: Date.now(),
    db:reqs.mongoose.connection.readyState
  }
  try {
    res.send(health)
  } catch (e) {
      health.message = e
      res.status(503).send()
  }
}
