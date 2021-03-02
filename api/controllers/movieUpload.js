const reqs = require('../../required_modules')

Movie = reqs.mongoose.model("Movies")

module.exports = (req, res) => {
  const movie_id = reqs.crypto.randomBytes(16).toString("hex")
  var uploadPath = reqs.path.join(__dirname, '../../assets')
  let formdata = new Map()
  
  formdata.set("filename", movie_id)

  var busboy = new reqs.Busboy({
    headers: req.headers
  })

  busboy.on('field', (key, value) => {
    formdata.set(key, value)
  })

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    uploadPath = uploadPath + "/" + movie_id + ".mp4"
    console.log(uploadPath)
    file.pipe(reqs.fs.createWriteStream(uploadPath))
  })

  busboy.on('finish', () => {
    console.log('upload complete', formdata)

    var new_movie = new Movie(Object.fromEntries(formdata));

    new_movie.save(function(err, movie) {
      if (err)
        res.send(err)
      res.json(movie)
    })
  })

  req.pipe(busboy)
}
