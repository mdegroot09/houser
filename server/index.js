require('dotenv').config()
const exress = require('express')
const app = express()
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => {console.log('Listening on port:', SERVER_PORT)})
})

app.use(express.json())
