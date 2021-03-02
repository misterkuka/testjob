const reqs = require('../../required_modules')

Movie = reqs.mongoose.model("Movies")
var movieNo, seriesNo, totalNo, disGeneres, disSeries, disStudios

module.exports = (req, res) => {

  //Ilość filmów:
  Movie.countDocuments({
    "isSeries": 0
  }, (err, count) => {
    movieNo = count
  })

  //Całkowita ilość przesłanych plików
  Movie.countDocuments({}, (err, count) => {
    totalNo = count
  })

  seriesNo = totalNo - movieNo

  Movie.find().distinct(
    'series_id', (err, results) => {
      if (results)
        disSeries = results.length
    })

  Movie.find().distinct(
    'genere', (err, results) => {
      if (results)
        disGeneres = results.length
    })

  Movie.find().distinct(
    'studio', (err, results) => {
      if (results)
        disStudios = results.length
    })

    console.log(totalNo)
  res.json({
    "Total Number of Movies": totalNo,
    "Number of standalone movies": movieNo,
    "Number of series and episodes": seriesNo,
    "No of distinct Series": disSeries,
    "No of distinct studios": disStudios,
    "No of distinct generes": disGeneres
  })
}
