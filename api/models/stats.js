const reqs = require('../../required_modules');

var Schema = reqs.mongoose.Schema

var movieStats = new Schema({
  totalNo: Number,
  movieNo: Number,
  seriesNo: Number,
  disSeries: Number,
  disStudios: Number,
  disGeneres: Number
})

module.exports = reqs.mongoose.model('stats', movieStats)
