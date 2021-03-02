const reqs = require('../../required_modules');

var Schema = reqs.mongoose.Schema

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

module.exports = reqs.mongoose.model('Users', userSchema)
