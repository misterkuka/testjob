const reqs = require('./required_modules')

module.exports = function(app) {
  reqs.mongoose.Promise = global.Promise
  //naprawiamy deprecation warnings, bo mongoose ma błędy
  reqs.mongoose.set('useNewUrlParser', true)
  reqs.mongoose.set('useFindAndModify', false)
  reqs.mongoose.set('useCreateIndex', true)
  reqs.mongoose.set('useUnifiedTopology', true)

  reqs.mongoose.connect('mongodb://localhost/testjob', (err) => {
    if(err) console.log(err)
    console.log("baza jest")
  });
};
