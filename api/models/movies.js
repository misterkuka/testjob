const reqs = require('../../required_modules');

var Schema = reqs.mongoose.Schema

var movieSchema = new Schema({
  isSeries: {
    type: Number,
    default: 0
  }, //0 - Film, 1 - Serial
  Genere:String,
  Studio: String,
  series_id: Number, //identyfikator serialu przy dodawaniu odcinków
  title: String,
  description: String,
  filename: String,
  Date: {
    type:Date,
    default: Date.now
  }
})

module.exports = reqs.mongoose.model('Movies', movieSchema)
