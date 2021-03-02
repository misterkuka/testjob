module.exports = function(app) {

  var ctrl = require('./ctr_list');

  app.route('/').get(ctrl.main_route)

  app.route('/health').get(ctrl.health)

  app.route('/users')
    .post(ctrl.users_ctrl.addUser)
    .get(ctrl.users_ctrl.list)

  app.route('/users/:userId').get(ctrl.verifyToken, ctrl.users_ctrl.getUserById)

  app.route('/login').post(ctrl.login)

  app.route('/logout').post(ctrl.logout)

  app.route('/movies')
    .get(ctrl.listMovies)
    .post(ctrl.upload)

  app.route('/movies/:id').get(ctrl.movieStream)

  app.route('/stripe').post(ctrl.stripe)

  app.route('/moviestats').get(ctrl.movieStats)
}
