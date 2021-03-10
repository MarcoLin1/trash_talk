const express = require('express')
const port = 3000
const app = express()
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generateTrashTalk')

// template engine
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }), express.static('stylesheets'))

//localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})


app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index', { trashTalk: generateTrashTalk(req.body), mark: req.body })
})


app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})