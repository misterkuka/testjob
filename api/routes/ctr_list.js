const main_route = require('../controllers/main_route'),
      health = require('../controllers/health'),
      users_ctrl = require('../controllers/users_ctrl'),
      login = require('../controllers/auth/login'),
      logout = require('../controllers/auth/logout'),
      verifyToken = require('../controllers/auth/verifyToken'),
      upload = require('../controllers/movieUpload'),
      movieStream = require('../controllers/movieStream'),
      listMovies = require('../controllers/listMovies'),
      stripe = require('../controllers/stripe'),
      movieStats = require('../controllers/movieStats')

module.exports = {
  main_route,
  health,
  users_ctrl,
  login,
  logout,
  verifyToken,
  upload,
  movieStream,
  listMovies,
  stripe,
  movieStats
}
