const reqs = require('../../../required_modules')

var User = reqs.mongoose.model('Users')


module.exports = (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = reqs.bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({
      auth: false,
      token: null
    });

    var token = reqs.jwt.sign({
      id: user._id
    }, reqs.config.secret, {
      expiresIn: 86400
    });

    res.status(200).send({
      auth: true,
      token: token
    });
  })
}
