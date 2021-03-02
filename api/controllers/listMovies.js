const reqs = require('../../required_modules')

Movie = reqs.mongoose.model("Movies")

module.exports = (req, res) => {
  Movie.find({}, (err, movies) => {

    var movieMap = {}

    movies.forEach((movie) => {
      movieMap[movie.filename] = movie
    })
    res.send(movies)
  })
}
