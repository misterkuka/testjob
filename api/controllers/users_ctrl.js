const reqs = require('../../required_modules')

var User = reqs.mongoose.model('Users')

exports.addUser = (req, res) => {

  console.log(req.body)
  req.body.password = reqs.bcrypt.hashSync(req.body.password,8)

  var newUser = new User(req.body)
  newUser.save((err, user) => {
    if (err) res.send(err)
    res.json(user)
  })
}

exports.getUserById = (req, res) => {
  User.findById(req.params.userId).then((result) => {
    res.status(200).send(result)
  })
}

exports.list = (req, res) => {
  User.find({}, (err, users) => {
    res.send(users)
  })
}
