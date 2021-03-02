const reqs = require('../../required_modules')

module.exports = (req, res) => {
    const filepath = reqs.path.join(__dirname, '../../assets/' + req.params.id + ".mp4")
    const stat = reqs.fs.statSync(filepath)
    const fileSize = stat.size
    const range = req.headers.range
    console.log('stream done')
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1
        const chunksize = (end-start) + 1
        const file = reqs.fs.createReadStream(filepath, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        reqs.fs.createReadStream(filepath).pipe(res)
    }
};
