const reqs = require('./required_modules')

const routes = require('./api/routes/routes');

const app = reqs.express();

const db = require('./db-connect');

const user = require('./api/models/users')
const movie = require('./api/models/movies')


app.listen(3000, () => {
  console.log("Serwer uruchomiony na porcie 3000");
})


app.use(reqs.rawBody)
app.use(reqs.bodyparser.json())

db(app)


routes(app)
