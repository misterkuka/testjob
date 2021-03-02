const reqs = require('../../required_modules')

Movie = reqs.mongoose.model("Movies")


module.exports = (req, res) => {

  let statData = new Map()

  //Ilość filmów:
  function movieNo() {
    return new Promise((resolve, reject) => {
      Movie.countDocuments({
        "isSeries": 0
      }, (err, count) => {
        resolve(count)
      })
    })
  }


  //Całkowita ilość przesłanych plików
  function totalNo() {
    return new Promise((resolve, reject) => {
      Movie.countDocuments({}, (err, count) => {
        resolve(count)
      })
    })
  }

  //ilość seriali
  function disSeries() {
    return new Promise((resolve, reject) => {
      Movie.find().distinct(
        'series_id', (err, results) => {
          if (results)
            resolve(results.length)
        })
    })
  }

  //Ilość gatunków
  function disGeneres() {
    return new Promise((resolve, reject) => {
      Movie.find().distinct(
        'genere', (err, results) => {
          if (results)
            resolve(results.length)
        })
    })
  }


  //Ilość wytwórni
  function disStudios() {
    return new Promise((resolve, reject) => {
      Movie.find().distinct(
        'studio', (err, results) => {
          if (results)
            resolve(results.length)
        })
    })
  }


  async function sendStats() {
    let total_no = await totalNo()
    let dis_series = await disSeries()
    let movie_no = await movieNo()
    let series_no = total_no - movie_no
    let disStudios_no = await disStudios()
    let disGeneres_no = await disGeneres()

    res.json({
      "Total Number of Movies": total_no,
      "Number of standalone movies": movie_no,
      "Number of series and episodes": series_no,
      "No of distinct Series": dis_series,
      "No of distinct studios": disStudios_no,
      "No of distinct generes": disGeneres_no
    })
  }

  sendStats()
}
